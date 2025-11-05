import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center overflow-hidden -mt-20">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some products to get started!</p>
          <Link
            to="/products"
            className="modern-button glass-card inline-flex bg-blue-875 text-black text-base font-medium py-4 px-6 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            Clear All
          </button>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="space-y-6">
                  {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 border-b border-gray-100 pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
                  >
                    {/* Product Image */}
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg mx-auto sm:mx-0"
                    />

                    {/* Product Details */}
                    <div className="flex-1 text-center sm:text-left mt-3 sm:mt-0">
                      <h3 className="text-lg font-semibold text-gray-900">{item.product.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {item.product.category === 'ro-uv-uf-alkaline'
                          ? 'RO+UV+UF+Alkaline Water Purifier' : item.product.category === 'commercial'
                          ? 'Commercial'
                          : 'Alkaline Ionizer'}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        {item.product.defaultColor}
                      </p>
                      <div className="flex justify-center sm:justify-start items-center mt-2">
                        <span className="text-lg font-bold text-blue-900">
                          ₹{item.product.price.toLocaleString()}
                        </span>
                        {item.product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            ₹{item.product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity + Total Price Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:space-x-4 mt-3 sm:mt-0 text-center sm:text-right w-full sm:w-auto">
                      {/* Quantity Controls */}
                      <div className="flex justify-center sm:justify-end items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.product.defaultColor, item.quantity - 1)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-110"
                        >
                          <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.product.defaultColor, item.quantity + 1)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-110"
                        >
                          <Plus className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>

                      {/* Total Price for Item */}
                      <div className="mt-2 sm:mt-0">
                        <div className="text-lg font-bold text-gray-900">
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.product.defaultColor )}
                          className="text-red-600 hover:text-red-800 transition-all duration-200 mt-1 p-1 rounded-full hover:bg-red-50 hover:scale-110"
                        >
                          <Trash2 className="h-4 w-4 mx-auto sm:mx-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                </div>
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-900 transition-colors duration-200"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{Math.round(getTotalPrice() / 1.18).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">₹{Math.round((getTotalPrice()/1.18)* 0.18).toLocaleString()}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-blue-900">
                      ₹{Math.round(getTotalPrice()).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="modern-button glass-card inline-flex bg-blue-875 text-black text-base font-medium py-4 px-8 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Security Info */}
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  🔒 Secure checkout with SSL encryption
                </p>
              </div>

              {/* Installation Info */}
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-1">Free Installation Included!</h3>
                <p className="text-sm text-blue-700">
                  Professional installation by certified technicians at no extra cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;