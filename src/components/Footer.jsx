import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/images/logo.jpeg";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white">
      {/* Logo Positioned at the Top Left */}
      <div className="absolute top-4 left-4">
        <a href="/">
          <img src={logo} alt="GEOTECH Logo" className="h-16" />
        </a>
      </div>

      {/* Wave SVG Background */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[15rem]"
        viewBox="0 0 1200 250"
        preserveAspectRatio="none"
      >
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
      <div className="relative pt-20 pb-6">
        <div className="container mx-auto px-6 md:px-12">
          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left w-full">
            {/* Quick Links */}
            <div className="space-y-4 ml-20">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-200 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200 transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200 transition">
                    Impact
                  </a>
                </li>
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
              <h3 className="text-xl font-semibold">Connect With Us</h3>
              <div className="flex items-center justify-center md:justify-start space-x-6">
                <a
                  href="https://web.facebook.com/profile.php?id=61573212342244"
                  className="hover:text-blue-200 transition"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://www.instagram.com/geo_tech01/"
                  className="hover:text-blue-200 transition"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.tiktok.com/@geotech9033?_t=ZM-8u48OS0iRMb&_r=1"
                  className="hover:text-blue-200 transition"
                >
                  <FaTiktok size={24} />
                </a>
                <a
                  href="https://wa.me/233554799116"
                  className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full border-2 border-white text-white hover:bg-green-600 transition"
                >
                  <FaWhatsapp className="w-4 h-4" />{" "}
                  {/* Ensuring uniform size */}
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
