import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Check, ChevronLeft, ChevronRight, Truck, Shield, Phone } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Youtube, Send, X, MessageCircleQuestion } from 'lucide-react';
import emailjs from 'emailjs-com';
import { doc, getDoc, setDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove, increment, collection, addDoc, orderBy, query, onSnapshot as onSnapshotQuery } from 'firebase/firestore';
import { auth, db } from '../firebase'; // your firebase export
import { serverTimestamp } from "firebase/firestore";


const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedDefaultColor, setSelectedDefaultColor] = useState( "Black");
  const [isOfferAvailable, setIsOfferAvailable] = useState(false);
  const [isCheckingOffers, setIsCheckingOffers] = useState(true);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');

   // 🔹 Inquiry Modal State
  const [showInquiry, setShowInquiry] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Product not found</h2>
          <Link to="/products" className="text-blue-600 hover:text-blue-800">
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    product.defaultColor = selectedDefaultColor;
    addToCart(product, quantity);
    
    //Add to Cart GA-GTM
    window.dataLayer.push({
    event: "add_to_cart",
    ecommerce: {
    currency: "INR",
    value: product.price * quantity,
    items: [{
      item_id: product.id,
      item_name: product.name,
      price: product.price,
      item_brand: "Enpure",
      item_category: product.category,
      quantity: quantity,
      item_variant: product.defaultColor // if you added color
    }]
      }
    });

    product.defaultColor = "Black";
    navigate("/products");

  };

  //const currentUser = auth.currentUser;

  const [likes, setLikes] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [reviews, setReviews] = useState<any[]>([]);
  const [averageRating, setAverageRating] = useState<number>(0);

  const [reviewForm, setReviewForm] = useState({
    rating: 5,
    comment: ''
  });
  const [postingReview, setPostingReview] = useState(false);

  //Submit Review function
  const submitReview = async (e: React.FormEvent) => {
  e.preventDefault();
  const user = auth.currentUser;
  if (!user) {
    alert('Please sign in to post a review.');
    return;
  }

  setPostingReview(true);
  try {
    const reviewsCol = collection(db, 'productFeedback', product.id, 'reviews');
    await addDoc(reviewsCol, {
      userId: user.uid,
      userName: user.displayName || user.email || 'Anonymous',
      rating: reviewForm.rating,
      comment: reviewForm.comment.trim(),
      createdAt: serverTimestamp()
    });
    setReviewForm({ rating: 5, comment: '' });
  } catch (err) {
    console.error('Error posting review:', err);
    alert('Could not post review. Try again.');
  } finally {
    setPostingReview(false);
  }
};

  //Like/Unlike function
  const handleLike = async () => {
  const user = auth.currentUser;
  if (!user) {
    alert('Please sign in to like products.');
    return;
  }

  const feedbackRef = doc(db, 'productFeedback', product.id);
  const userIdentifier = user.uid; // use uid to be robust

  try {
    if (hasLiked) {
      // Unlike: remove uid from likedBy and decrement
      await updateDoc(feedbackRef, {
        likedBy: arrayRemove(userIdentifier),
        likes: increment(-1)
      });
    } else {
      // Like: add uid and increment
      await updateDoc(feedbackRef, {
        likedBy: arrayUnion(userIdentifier),
        likes: increment(1)
      });
    }
    // UI will update via realtime listener
  } catch (err) {
    console.error('Error toggling like:', err);
  }
};

  //Real-time Listener for both likes and reviews
  useEffect(() => {
  if (!product) return;

  //Product Detail Page - View Item GA-GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "view_item",
    ecommerce: {
      currency: "INR",
      value: product.price,
      items: [{
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        item_brand: "Enpure",
        item_category: product.category
      }]
    }
  });


  const feedbackRef = doc(db, 'productFeedback', product.id);

  // Ensure doc exists (create default doc if missing)
  (async () => {
    const snap = await getDoc(feedbackRef);
    if (!snap.exists()) {
      await setDoc(feedbackRef, { likes: 0, likedBy: [] });
    }
  })();

  // Listen to feedback (likes + likedBy)
  const unsubFeedback = onSnapshot(feedbackRef, (snap) => {
    if (!snap.exists()) {
      setLikes(0);
      setHasLiked(false);
      return;
    }
    const data = snap.data() as any;
    setLikes(data.likes ?? 0);

    // setHasLiked based on uid or email (prefer uid)
    const uid = auth.currentUser?.uid;
    const userIdentifier = uid ?? auth.currentUser?.email;
    setHasLiked(Array.isArray(data.likedBy) && userIdentifier ? data.likedBy.includes(userIdentifier) : false);
  });

  // Listen to reviews subcollection (ordered by timestamp)
  const reviewsCol = collection(db, 'productFeedback', product.id, 'reviews');
  const q = query(reviewsCol, orderBy('createdAt', 'desc'));
  const unsubReviews = onSnapshotQuery(q, (snapshot) => {
    const reviewsData: any[] = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    setReviews(reviewsData);

     // Calculate average rating
    if (reviewsData.length > 0) {
      const avg = reviewsData.reduce((acc, r) => acc + (r.rating || 0), 0) / reviewsData.length;
      setAverageRating(avg);
    } else {
      setAverageRating(0);
    }
    
  });

  return () => {
    unsubFeedback();
    unsubReviews();
  };
}, [product?.id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Send inquiry email via EmailJS
  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_w68sbak', // Replace with your EmailJS service ID
        'template_afw4s59', // Create new template in EmailJS
        {
          product_name: product.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          notes: formData.notes,
        },
        'b__8bJCneOE0SlqZ6' // Replace with your EmailJS public key
      );

      alert('Your inquiry has been sent successfully!');
      setFormData({ name: '', phone: '', email: '', address: '', notes: '' });
      setShowInquiry(false);
    } catch (error) {
      console.error('Error sending inquiry:', error);
      alert('Failed to send inquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  //Share to others function
  const handleShare = async () => {
  const shareData = {
    title: product.name,
    text: `Check out this amazing product: ${product.name} — only ₹${product.price.toLocaleString()} at Enpure!`,
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      console.log('Product shared successfully!');
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('🔗 Product link copied to clipboard!');
    }
  } catch (err) {
    console.error('Error sharing:', err);
  }
};

const [touchStart, setTouchStart] = useState<number | null>(null);
const [touchEnd, setTouchEnd] = useState<number | null>(null);

const minSwipeDistance = 50; // minimum swipe distance in px

const onTouchStart = (e: React.TouchEvent) => {
  setTouchEnd(null); // Reset touch end
  setTouchStart(e.targetTouches[0].clientX);
};

const onTouchMove = (e: React.TouchEvent) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return;
  const distance = touchStart - touchEnd;

  if (distance > minSwipeDistance) {
    // Swiped left → Next image
    //nextImage();
    setSelectedImage(prev => (prev < images.length - 1 ? prev + 1 : 0))
  } else if (distance < -minSwipeDistance) {
    // Swiped right → Previous image
    //prevImage();
    setSelectedImage(prev => (prev > 0 ? prev - 1 : images.length - 1))
  }
};

  useEffect(() => {
    let retries = 0;
    const maxRetries = 5;

    const initRazorpayOffers = () => {
      if (window.Razorpay && window.Razorpay.Offers) {
        try {
          window.Razorpay.Offers.create({
            key: "rzp_test_RZnefzpGGa0MXe", // same key used for checkout
            amount: product.price * 100, // in paise
            currency: "INR",
            target: "#razorpay-offers", // container div
            theme: {
              color: "#1e3a8a", // Enpure blue
            },
          });

          setIsOfferAvailable(true);
          setIsCheckingOffers(false);
        } catch (err) {
          console.error("Error creating Razorpay Offers:", err);
          setIsOfferAvailable(false);
          setIsCheckingOffers(false);
        }
      } else if (retries < maxRetries) {
        retries++;
        console.warn(`Razorpay Offers not ready, retrying... (${retries})`);
        setTimeout(initRazorpayOffers, 1000);
      } else {
        console.error("Razorpay Offers not available after retries.");
        setIsCheckingOffers(false);
      }
    };

    initRazorpayOffers();
  }, [product.price]);

  const images = [product.image, ...product.gallery];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <br/>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-blue-950">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-600 hover:text-blue-950">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="lg:flex">
            {/* Product Images */}
            <div className="lg:w-1/2 p-6">
              <div 
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                className="relative w-full overflow-hidden select-none touch-pan-y"
              >
                {/* Main Product Image */}
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full max-w-md h-auto object-contain rounded-lg mx-auto"
                />

                {/* Image Navigation (visible on hover) */}
                {images.length > 1 && (
                  <>
                    {/* Left Arrow */}
                    <button
                      onClick={() =>
                        setSelectedImage(prev => (prev > 0 ? prev - 1 : images.length - 1))
                      }
                      className="absolute left-2 top-1/2 -translate-y-1/2 glass-card hover:bg-transparent duration-300 bg-white/80 backdrop-blur-md shadow-md p-2 rounded-full"
                    >
                      <ChevronLeft className="h-5 w-5 text-black" />
                    </button>

                    {/* Right Arrow */}
                    <button
                      onClick={() =>
                        setSelectedImage(prev => (prev < images.length - 1 ? prev + 1 : 0))
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 glass-card hover:bg-transparent duration-300 bg-white/80 backdrop-blur-md shadow-md p-2 rounded-full"
                    >
                      <ChevronRight className="h-5 w-5 text-gray-800" />
                    </button>
                  </>
                )}
              </div>

              <br/>
              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className="lg:w-1/2 p-6">
              <div className="mb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => {
                      const filled = i < Math.floor(averageRating);
                      const halfFilled = i < averageRating && i >= Math.floor(averageRating);

                      return (
                      <Star
                        key={i}
                          className={`h-4 w-4 ${
                            filled
                              ? 'text-yellow-400 fill-current'
                              : halfFilled
                              ? 'text-yellow-300 fill-current opacity-70'
                              : 'text-gray-300'
                        }`}
                      />
                      );
                    })}
                  </div>

                  <span className="ml-2 text-gray-600">
                    ({reviews.length} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold text-blue-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <label htmlFor="quantity" className="text-sm font-medium text-gray-700 mr-3">
                      Quantity:
                    </label>
                    <select
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="rounded-full px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>
                  <br/>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Color</h3>
                <div className="flex space-x-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedDefaultColor(color)}
                        className={`modern-button px-6 py-3 rounded-2xl transition-all duration-200 text-black hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3 w-full sm:w-auto ${
                          selectedDefaultColor === color
                            ? "bg-blue-950 text-white border-blue-950"
                            : "bg-white text-gray-800 border-gray-300"
                        } transition-all duration-200`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                  <br/>
                <div className="flex flex-wrap sm:flex-row sm:space-x-3 gap-3 sm:gap-0 mb-6 justify-center sm:justify-start">
                  {/* Enquiry Button */}
                  <button
                    onClick={() => setShowInquiry(true)}
                    className="modern-button glass-card bg-transparent text-black py-3 px-4 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 font-medium w-full sm:w-auto"
                  >
                    <MessageCircleQuestion className="h-5 w-5" />
                    <span>Enquiry</span>
                  </button>

                  {/* Add to Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    className="modern-button glass-card text-black py-3 px-4 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 font-medium w-full sm:w-auto"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>

                  {/* YouTube Button */}
                  <a
                    href={product.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-button glass-card px-6 py-3 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center w-full sm:w-auto"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>

                  {/* Likes Button */}
                  <button
                    onClick={handleLike}
                    className={`modern-button px-6 py-3 rounded-2xl transition-all duration-200 text-black hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3 w-full sm:w-auto ${
                      hasLiked ? 'bg-red-100' : 'hover:bg-blue-950 hover:text-white'
                    }`}
                  >
                    <Heart
                      className={`h-5 w-5 text-black ${
                        hasLiked ? 'text-red-500 fill-current' : 'hover:text-white'
                      }`}
                    />
                    <span>{likes}</span>
                  </button>

                  {/* Share Button */}
                  <button
                    onClick={handleShare}
                    className="modern-button glass-card px-6 py-3 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center w-full sm:w-auto"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Razorpay EMI Options Display */}
                {isOfferAvailable && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-gray-800">EMI & Offers</h4>
                  <div id="razorpay-offers" className="border p-3 rounded-md"></div>
                </div>
                )}


                {/* Service Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-blue-900" />
                    <span className="text-sm text-gray-700">Free Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-blue-900" />
                    <span className="text-sm text-gray-700">{product.warranty}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-blue-900" />
                    <span className="text-sm text-gray-700">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-6 py-4 text-sm font-medium rounded-t-3xl transition-all duration-200 ${
                  activeTab === 'description'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`px-6 py-4 text-sm font-medium rounded-t-3xl transition-all duration-200 ${
                  activeTab === 'specifications'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-4 text-sm font-medium rounded-t-3xl transition-all duration-200 ${
                  activeTab === 'reviews'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                Reviews ({reviews.length})
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">All Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-900">{key}</span>
                        <span className="text-gray-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 🔹 Inquiry Modal/Form */}
      {showInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative">
            <button
              onClick={() => setShowInquiry(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <X className="h-6 w-6" />
            </button>

            <h2 className="text-2xl font-semibold text-center text-blue-900 mb-6">
              Product Inquiry - {product.name}
            </h2>

            <form onSubmit={handleInquirySubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your address"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                  placeholder="Enter any additional details..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="modern-button glass-card w-full bg-blue-875 text-black py-4 px-6 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg font-medium"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
              {/* Reviews */}
              {activeTab === "reviews" && (
                <div className="mt-8 space-y-6">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>

                  {/* Reviews List */}
                  <div className="space-y-4">
                    {reviews.length === 0 ? (
                      <p className="text-sm text-gray-500">
                        No reviews yet — be the first to share your experience!
                      </p>
                    ) : (
                      reviews.map((r) => (
                        <div
                          key={r.id}
                          className="border border-gray-200 rounded-2xl p-4 bg-gray-50"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium text-gray-900">{r.userName}</div>
                              <div className="text-sm text-gray-500">
                                {r.rating} ★ •{" "}
                                {r.createdAt
                                  ? new Date(r.createdAt.seconds * 1000).toLocaleDateString()
                                  : ""}
                              </div>
                            </div>
                          </div>
                          <p className="mt-2 text-gray-700">{r.comment}</p>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Add Review Form */}
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-3">Add Your Review</h4>

                    <form onSubmit={submitReview} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <label className="text-sm text-gray-700">Rating:</label>
                        <select
                          value={reviewForm.rating}
                          onChange={(e) =>
                            setReviewForm({ ...reviewForm, rating: Number(e.target.value) })
                          }
                          className="rounded-full border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        >
                          {[5, 4, 3, 2, 1].map((r) => (
                            <option key={r} value={r}>
                              {r} ★
                            </option>
                          ))}
                        </select>
                      </div>

                      <textarea
                        required
                        value={reviewForm.comment}
                        onChange={(e) =>
                          setReviewForm({ ...reviewForm, comment: e.target.value })
                        }
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your review..."
                      />

                      <button
                        type="submit"
                        disabled={postingReview}
                        className="modern-button glass-card text-black py-3 px-4 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 font-medium"
                      >
                        {postingReview ? "Posting..." : "Post Review"}
                      </button>
                    </form>
                  </div>
                </div>
              )}


              {/*
              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  {product.reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{review.userName}</h4>
                        <span className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                    
                  ))}
                </div>
              )}
                */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;