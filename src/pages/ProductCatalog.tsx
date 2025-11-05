import React, { useState, useMemo, useEffect } from 'react';
import { Search, Grid, List } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ShoppingCart } from 'lucide-react';
import { products, Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import { db } from '../firebase';
import {
  doc,
  getDoc,
  onSnapshot,
  collection,
} from 'firebase/firestore';

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000]);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [ratingsData, setRatingsData] = useState<Record<string, { avg: number; count: number }>>({});

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'ro-uv-uf-alkaline', label: 'RO+UV+UF+Alkaline' },
    { value: 'alkaline-ionizer', label: 'Alkaline Ionizers' },
    { value: 'commercial', label: 'Commercial' },
  ];

  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'price-low', label: 'Price (Low to High)' },
    { value: 'price-high', label: 'Price (High to Low)' },
    { value: 'rating', label: 'Rating (High to Low)' },
  ];

  // 🔹 Listen to all product ratings in Firestore in real-time
  useEffect(() => {
    const unsubscribers: (() => void)[] = [];

    products.forEach((product) => {
      const reviewsRef = collection(db, 'productFeedback', product.id, 'reviews');
      const unsubscribe = onSnapshot(reviewsRef, (snapshot) => {
        const reviews = snapshot.docs.map((doc) => doc.data());
        const total = reviews.reduce((acc, r: any) => acc + (r.rating || 0), 0);
        const count = reviews.length;
        const avg = count > 0 ? total / count : 0;

        setRatingsData((prev) => ({
          ...prev,
          [product.id]: { avg, count },
        }));
      });
      unsubscribers.push(unsubscribe);
    });

    return () => unsubscribers.forEach((unsub) => unsub());
  }, []);
  

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          const aRating = ratingsData[a.id]?.avg || 0;
          const bRating = ratingsData[b.id]?.avg || 0;
          return bRating - aRating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy, ratingsData]);


  return (
    <div className="min-h-screen bg-white ">
      <div className="container mx-auto px-4 py-8 ">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Products
          </h1>
          <p className="text-lg text-gray-600">
            Discover our Complete Range of Water Purification Systems
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-4 md:mb-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-full transition-all duration-200"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>

              {/* Price Range */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-900">Price:</span>
                <input
                  type="range"
                  min="0"
                  max="300000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-24"
                  
                />
                <span className="text-sm text-gray-900">
                  ₹{priceRange[1].toLocaleString()}
                </span>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-full transition-all duration-200"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">View:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all duration-200 ${viewMode === 'grid' ? 'bg-blue-900 text-gray-200' : 'text-gray-400 hover:bg-gray-100'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-all duration-200 ${viewMode === 'list' ? 'bg-blue-900 text-gray-200' : 'text-gray-400 hover:bg-gray-100'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAndSortedProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid/List */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
          }>
            {filteredAndSortedProducts.map(product => (
              viewMode === 'grid' ? (
                <ProductCard key={product.id} product={product} />
              ) : (
                <ProductListItem key={product.id} product={product} ratingsData={ratingsData} />
              )
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// List view component
const ProductListItem: React.FC<{ product: Product, ratingsData: any }> = ({ product, ratingsData }) => {
  const productRating = ratingsData[product.id] || { avg: 0, count: 0 };
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth(); // ✅ get auth status
  const navigate = useNavigate();

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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-900">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">{product.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(productRating.avg)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">
                  ({productRating.count || 0} reviews)
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Link to={`/product/${product.id}`}>
              <button className="modern-button glass-card text-black py-4 px-6 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 font-medium">
                View Details
              </button>
              </Link>

              <button
                onClick={handleAddToCart}
                className="modern-button glass-card text-black py-4 px-6 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 font-medium"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;