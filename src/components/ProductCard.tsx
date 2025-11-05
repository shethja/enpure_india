import React from 'react';
import { useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc, setDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove, increment, collection, addDoc, orderBy, query, onSnapshot as onSnapshotQuery } from 'firebase/firestore';
import { auth, db } from '../firebase'; // your firebase export
//import { toast } from 'react-toastify'; 

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth(); // ✅ get auth status
  const navigate = useNavigate();

    const [likes, setLikes] = useState<number>(0);
    const [hasLiked, setHasLiked] = useState<boolean>(false);
    const [reviews, setReviews] = useState<any[]>([]);
    const [averageRating, setAverageRating] = useState<number>(0);
  

  //Real-time Listener for both likes and reviews
    useEffect(() => {
    if (!product) return;
  
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
  

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      //toast.info("Please log in to add products to your cart.")
      //setTimeout(() => navigate('/login'), 1500); // ✅ redirect if user not logged in
      alert("Please log in to add products to your cart.")
      navigate('/login');
      return;
    }

    addToCart(product);
    //toast.success(`${product.name} added to your cart! `);
  };


  return (
    <div className="glass-card bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white transition-all duration-500 overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain w-full h-80 rounded-lg group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            srcSet={`${product.image} 1x, ${product.image} 2x`}
          />
          {product.originalPrice && (
            <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        <div className="p-8">
          <h3 className="text-xl font-light text-gray-900 mb-3 line-clamp-2 leading-tight">
            {product.name}
          </h3>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(averageRating)
                      ? 'text-yellow-500 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">
              ({reviews.length})
            </span>
          </div>

          <p className="text-gray-600 text-base mb-6 line-clamp-2 leading-relaxed font-light">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-light text-blue-950">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-base text-gray-500 line-through font-light">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
      
      <div className="px-8 pb-8">
        <button
          onClick={handleAddToCart}
          className="modern-button glass-card w-full bg-blue-875 text-black py-4 px-6 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg font-medium"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;