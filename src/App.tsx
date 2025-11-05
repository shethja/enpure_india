import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogPosts from './pages/BlogPosts';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import ForgotPassword from './pages/Forgot-Password';
import PrivacyPolicy from './pages/Privacy-Policy';
import Terms from './pages/Terms';
import Testimonials from './pages/Testimonials';
import Installation from './pages/Installation';
import OrderConfirmation from './pages/OrderConfirmation';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import usePageView from './analytics/usepageView';

//import "./uploadProducts";
//import UploadProducts from './pages/UploadProducts';
//import { ToastContainer } from 'react-toastify';
//import 'react-toastify/ReactToastify.css';

//import { uploadBlogs } from "./uploadBlogs";

function App() {
  //useEffect(() => {
    //uploadBlogs(); // ⚠️ Run once then remove this line after upload
  //}, []);
  //usePageView();

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <PageViewWrapper />
          <div className="min-h-screen bg-white">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductCatalog />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/installation" element={<Installation />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:slug" element={<BlogPosts />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                {/*<Route path="/uploadProducts" element={<UploadProducts />} /> */}
                {/*<ToastContainer position="top-center" autoClose={2000} /> */}
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

function PageViewWrapper() {
  usePageView();
  return null;
}

export default App;