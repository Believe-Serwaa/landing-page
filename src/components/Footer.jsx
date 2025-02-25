import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white">
      {/* Wave SVG Background */}
      <svg className="absolute bottom-0 left-0 w-full h-[15rem]" viewBox="0 0 1200 250" preserveAspectRatio="none">
        <path 
          d="M0 100 C300 -50, 600 200, 900 50 L1200 100 L1200 250 L0 250 Z" 
          fill="rgba(255, 255, 255, 0.2)"
        />
        <path 
          d="M0 150 C400 0, 800 250, 1200 150 L1200 250 L0 250 Z" 
          fill="rgba(255, 255, 255, 0.3)"
        />
      </svg>

      {/* Footer Content */}
      <div className="relative pt-16 pb-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-200 transition">Home</a></li>
                <li><a href="#" className="hover:text-blue-200 transition">About Us</a></li>
                <li><a href="#" className="hover:text-blue-200 transition">Features</a></li>
                <li><a href="#" className="hover:text-blue-200 transition">Impact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <ul className="space-y-2">
                <li>Email: gyimart9033@gmail.com</li>
                <li>Phone: +233554799116</li>
                <li>Address: Hwidiem, Ahafo Region, Ghana</li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="#" className="hover:text-blue-200 transition">
                  <FaFacebookF size={24} />
                </a>
                <a href="#" className="hover:text-blue-200 transition">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="hover:text-blue-200 transition">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:text-blue-200 transition">
                  <FaTiktok size={24} />
                </a>
                <a href="#" className="hover:text-blue-200 transition">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-white/20 text-center">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} GEOTECH. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
