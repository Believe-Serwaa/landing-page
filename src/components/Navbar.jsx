"use client";

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  
  // Update active section based on URL or scroll position
  useEffect(() => {
    // First check if there's a hash in the URL
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      setActiveSection(sectionId);
    } else if (location.pathname === '/') {
      // On homepage with no hash, default to home
      setActiveSection('home');
    } else if (location.pathname === '/contact') {
      // On contact page
      setActiveSection('contact');
    }
    
    // Add scroll event listener to update active section based on scroll position
    const handleScroll = () => {
      // Only track scroll on homepage
      if (location.pathname !== '/') return;
      
      const navbarHeight = 100; // Approximate height of navbar
      const scrollPosition = window.scrollY;
      
      // Special case for home - if we're close to the top of the page
      if (scrollPosition < 100) {
        setActiveSection('home');
        return;
      }
      
      // Get all sections and their positions
      const homeElement = document.getElementById('home');
      const aboutElement = document.getElementById('about');
      const featuresElement = document.getElementById('features');
      const impactElement = document.getElementById('impact');
      
      // Define thresholds for each section
      // For home section: if scrolled less than about section's top position
      if (aboutElement && scrollPosition < (aboutElement.offsetTop - navbarHeight)) {
        setActiveSection('home');
      }
      // For about section: if scrolled past about section's top but less than features
      else if (aboutElement && featuresElement && 
               scrollPosition >= (aboutElement.offsetTop - navbarHeight) && 
               scrollPosition < (featuresElement.offsetTop - navbarHeight)) {
        setActiveSection('about');
      }
      // For features section: if scrolled past features section's top but less than impact
      else if (featuresElement && impactElement && 
               scrollPosition >= (featuresElement.offsetTop - navbarHeight) && 
               scrollPosition < (impactElement.offsetTop - navbarHeight)) {
        setActiveSection('features');
      }
      // For impact section: if scrolled past impact section's top
      else if (impactElement && scrollPosition >= (impactElement.offsetTop - navbarHeight)) {
        setActiveSection('impact');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger handleScroll on initial load
    setTimeout(handleScroll, 100); // Small delay to ensure DOM elements are loaded
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Smooth scroll to section when clicking a nav link
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(sectionId);

    if (window.location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          // Offset for the fixed navbar
          const navbarHeight = 100; // Approximate
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth"
          });
        }
      }
    }
  };

  // Logo click should always set home as active
  const handleLogoClick = (e) => {
    e.preventDefault();
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Active link style classes
  const activeLinkClass = "text-blue-600 font-medium";
  const normalLinkClass = "hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/" onClick={handleLogoClick}>
          <img src="/tech.png" alt="SmartBucket Logo" className="h-16 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 px-6 py-3 rounded-xl ring-2 ring-sky-400 bg-white">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="/" 
                className={activeSection === "home" ? activeLinkClass : normalLinkClass} 
                onClick={(e) => scrollToSection(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/#about" 
                className={activeSection === "about" ? activeLinkClass : normalLinkClass} 
                onClick={(e) => scrollToSection(e, "about")}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/#features" 
                className={activeSection === "features" ? activeLinkClass : normalLinkClass} 
                onClick={(e) => scrollToSection(e, "features")}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="/#impact" 
                className={activeSection === "impact" ? activeLinkClass : normalLinkClass} 
                onClick={(e) => scrollToSection(e, "impact")}
              >
                Impact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <a 
          href="/contact" 
          className={`hidden md:inline-block px-6 py-2 rounded-lg ${
            activeSection === "contact" || location.pathname === "/contact"
              ? "text-white bg-sky-600 font-medium" 
              : "text-white bg-sky-400 hover:bg-cyan-500"
          }`}
        >
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
              <a 
                href="/" 
                className={`block px-6 py-2 ${activeSection === "home" ? "bg-gray-100 text-blue-600 font-medium" : "hover:bg-gray-100"}`} 
                onClick={(e) => scrollToSection(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/#about" 
                className={`block px-6 py-2 ${activeSection === "about" ? "bg-gray-100 text-blue-600 font-medium" : "hover:bg-gray-100"}`} 
                onClick={(e) => scrollToSection(e, "about")}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/#features" 
                className={`block px-6 py-2 ${activeSection === "features" ? "bg-gray-100 text-blue-600 font-medium" : "hover:bg-gray-100"}`} 
                onClick={(e) => scrollToSection(e, "features")}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="/#impact" 
                className={`block px-6 py-2 ${activeSection === "impact" ? "bg-gray-100 text-blue-600 font-medium" : "hover:bg-gray-100"}`} 
                onClick={(e) => scrollToSection(e, "impact")}
              >
                Impact
              </a>
            </li>
          </ul>

          {/* Mobile Contact Button */}
          <div className="py-4 flex justify-center">
            <a 
              href="/contact" 
              className={`px-6 py-2 rounded-lg ${
                activeSection === "contact" || location.pathname === "/contact"
                  ? "text-white bg-sky-600 font-medium" 
                  : "text-white bg-sky-400 hover:bg-sky-600"
              }`}
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;