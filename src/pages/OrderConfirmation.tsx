// src/pages/OrderConfirmation.tsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from 'lucide-react';

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId;

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
                    <p className="text-gray-600 mb-6">
                      Thank you for your order. You will receive a confirmation email shortly.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-gray-600">
                        <strong>Order ID:</strong> {orderId}<br />
                      </p>
                    </div>
                    

                    
                    <button
                        onClick={() => navigate("/orders")}
                        className="modern-button glass-card inline-flex bg-blue-875 text-black text-lg font-medium py-4 px-12 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"      
                        >
                        View My Orders
                    </button>
    </div>
    </div>
  );
};

export default OrderConfirmation;
