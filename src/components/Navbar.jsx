"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use react-router-dom for Vite
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // React Router's navigate function

  // Smooth scroll to section when clicking a nav link
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsOpen(false); // Close mobile menu when clicking a link

    if (window.location.pathname !== "/") {
      // If not on homepage, navigate to homepage with section hash
      navigate(`/#${sectionId}`);
    } else {
      if (sectionId === "home") {
        // Scroll to the top of the page if "home" is clicked
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Scroll smoothly to section and align it at the top of the viewport
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/" onClick={(e) => scrollToSection(e, "home")}>
          <img src="/tech.png" alt="SmartBucket Logo" className="h-16 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 px-6 py-3 rounded-xl ring-2 ring-blue-500 bg-white">
          <ul className="flex space-x-8">
            <li>
              <a href="/" className="hover:text-blue-600" onClick={(e) => scrollToSection(e, "home")}>
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:text-blue-600" onClick={(e) => scrollToSection(e, "about")}>
                About Us
              </a>
            </li>
            <li>
              <a href="/#features" className="hover:text-blue-600" onClick={(e) => scrollToSection(e, "features")}>
                Features
              </a>
            </li>
            <li>
              <a href="/#impact" className="hover:text-blue-600" onClick={(e) => scrollToSection(e, "impact")}>
                Impact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <a href="/contact" className="hidden md:inline-block px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Get In Touch
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="py-4 space-y-4 text-center text-gray-700">
            <li>
              <a href="/" className="block px-6 py-2 hover:bg-gray-100" onClick={(e) => scrollToSection(e, "home")}>
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="block px-6 py-2 hover:bg-gray-100" onClick={(e) => scrollToSection(e, "about")}>
                About Us
              </a>
            </li>
            <li>
              <a href="/#features" className="block px-6 py-2 hover:bg-gray-100" onClick={(e) => scrollToSection(e, "features")}>
                Features
              </a>
            </li>
            <li>
              <a href="/#impact" className="block px-6 py-2 hover:bg-gray-100" onClick={(e) => scrollToSection(e, "impact")}>
                Impact
              </a>
            </li>
          </ul>

          {/* Mobile Contact Button */}
          <div className="py-4 flex justify-center">
            <a href="/contact" className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;