import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/enpureLogoBlue.png';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import makeinIndia from '../assets/makeInIndia.png';
import dihydroLogo from '../assets/dihydroLogoBlue(1).png';
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  return (
    <AnimatedSection direction='up' delay={0.2}>
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-2 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
          {/* Company Info */}
          <div className="space-y-6">
              {/* Logo */}
            <Link to="/" className="flex items-center gap-0.5 hover:scale-105 transition-transform duration-300">
                <img
                  src={dihydroLogo}
                  alt="diHydro-logo"
                  className="w-20 h-auto object-contain mx+10"
                />
                <div className="w-px h-8 bg-blue-900 mx-1 mr-4" /> {/* Divider Line */}
                <img
                  src={logo}
                  alt="Enpure-logo"
                  className="w-44 h-auto object-contain"
                />
            </Link>
            
            <p className="text-slate-600 leading-relaxed max-w-sm">
              Leading Manufacturer of Premium Water Purification Systems. 
              Pure Water, Healthy Life.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                ISO Certified
              </div>
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                RO+UV+UF
              </div>
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                Eco-friendly
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Co8FoXTCt/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 modern-button glass-card bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-950 hover:text-white transition-all duration-200">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://wa.me/message/T24EYE5NPJVZB1" target="_blank" rel="noopener noreferrer" className="w-9 h-9 modern-button glass-card bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-950 hover:text-white transition-all duration-200">
              <FaWhatsapp className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/enpure_india?igsh=MWs0Mng1eWZnMWZsbw=="  target="_blank" rel="noopener noreferrer" className="w-9 h-9 modern-button glass-card bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-950 hover:text-white transition-all duration-200">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@enpureindia1634" target="_blank" rel="noopener noreferrer" className="w-9 h-9 modern-button glass-card bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-950 hover:text-white transition-all duration-200">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/enpureindia/" target="_blank" rel="noopener noreferrer" className="w-9 modern-button glass-card h-9 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-950 hover:text-white transition-all duration-200">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Quick Links</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li>
                <Link to="/" className="text-slate-600 hover:text-blue-950 transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-600 hover:text-blue-950 transition-colors duration-300 text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/installation" className="text-slate-600 hover:text-blue-950 transition-colors duration-300 text-sm">
                  Installation
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-slate-600 hover:text-blue-950 transition-colors duration-300 text-sm">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-slate-600 hover:text-blue-950 transition-colors duration-300 text-sm">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-blue-950 transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-blue-950 transition-colors duration-300 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="space-y-6 px-0 lg:px-20">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-600 text-sm leading-relaxed">
                  <a href="https://www.google.com/maps?ll=21.141119,72.782375&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=6757929997252211333" 
                  className="text-slate-600 hover:text-blue-950 transition-colors duration-200"
                  target="_blank" rel="noopener noreferrer"
                  >
                  129, The Grand Plaza, <br />
                  Near Luthra Circle, Vesu <br />
                  Surat, Gujarat, India - 395007.
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <a href="tel:+917016038671" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-950 transition-colors duration-200 text-sm">
                  +91 70160 38671
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <a href="mailto:info@enpure.in" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-950 transition-colors duration-200 text-sm">
                  info@enpure.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              © 2024 Enpure. All rights reserved.
            </p>
            <img src={makeinIndia}
                  alt="Enpure-logo"
                  className="w-20 md:w-24 h-20 object-contain"
            />
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-slate-600 hover:text-blue-950 transition-colors duration-300 text-sm">
                  Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-600 hover:text-blue-950 transition-colors duration-300 text-sm">
                  Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </AnimatedSection>
  );
};

export default Footer;