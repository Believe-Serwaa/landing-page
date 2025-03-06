import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/images/logo.jpeg";

const Footer = () => {
  // Function to handle smooth scrolling to sections
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior

    if (window.location.pathname !== "/") {
      // If not on homepage, navigate to homepage with section hash
      window.location.href = `/#${sectionId}`;
    } else {
      // Scroll smoothly to section and align it at the top of the viewport
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="relative w-full bg-sky-500 text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Company Description */}
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="GEOTECH Logo" className="h-16 w-16 rounded-full" />
              <h2 className="text-2xl font-bold">GEOTECH</h2>
            </div>
            <p className="text-center text-white/90 max-w-xs">
              Innovative technology solutions driving sustainable development and community empowerment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="grid grid-cols-1 gap-4 text-white/90 text-center">
              <a href="/" className="hover:text-white transition" onClick={(e) => scrollToSection(e, "home")}>
                Home
              </a>
              <a href="/#about" className="hover:text-white transition" onClick={(e) => scrollToSection(e, "about")}>
                About Us
              </a>
              <a href="/#features" className="hover:text-white transition" onClick={(e) => scrollToSection(e, "features")}>
                Features
              </a>
              <a href="/#impact" className="hover:text-white transition" onClick={(e) => scrollToSection(e, "impact")}>
                Impact
              </a>
              <a href="/contact" className="hover:text-white transition">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col items-center space-y-6">
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <div className="space-y-2 text-white/90">
                <p>Email: gyimart9033@gmail.com</p>
                <p>Phone: +233 554 799 116</p>
                <p>Address: Hwidiem, Ahafo Region, Ghana</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6 justify-center">
              <a 
                href="https://web.facebook.com/profile.php?id=61573212342244" 
                className="text-white hover:text-blue-200 transition"
              >
                <FaFacebookF size={24} />
              </a>
              <a 
                href="https://www.instagram.com/geo_tech01/" 
                className="text-white hover:text-sky-300 transition"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://www.tiktok.com/@geotech9033?_t=ZM-8u48OS0iRMb&_r=1" 
                className="text-white hover:text-sky-300 transition"
              >
                <FaTiktok size={24} />
              </a>
              <a 
                href="https://wa.me/233554799116" 
                className="text-white hover:text-sky-300 transition"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright with Decorative Divider */}
        <div className="mt-6 pt-6 border-t border-white/20 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} GEOTECH. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.05) 25%, 
            rgba(255,255,255,0.05) 50%, transparent 50%, transparent 75%, 
            rgba(255,255,255,0.05) 75%)`,
          backgroundSize: '40px 40px'
        }}
      />
    </footer>
  );
};

export default Footer;