import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { Key } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('✅ If an account with this email exists, a Password reset link has been sent to your email.');
    } catch (err: any) {
      console.error('Reset error:', err.code, err.message);

      switch (err.code) {
        case 'auth/user-not-found':
          setError('❌ This email is not registered.');
          break;
        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;
        case 'auth/missing-email':
          setError('Email field cannot be empty.');
          break;
        default:
          setError('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden -mt-20">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-4">
            <Key className="h-8 w-8 text-white" />
          </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">Forgot Password</h2>

        <form onSubmit={handleResetPassword} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
            />
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          {message && <p className="text-green-600 text-sm text-center">{message}</p>}

          <button
            type="submit"
            className="w-full modern-button bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Send Reset Link
          </button>

          <div className="text-center mt-4">
            <Link to="/login" className="text-blue-600 hover:text-blue-900 text-medium">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
