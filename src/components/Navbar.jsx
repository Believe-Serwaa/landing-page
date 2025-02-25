import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center py-4">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-blue-500">
          SmartBucket<span className="text-black">.</span>
        </a>

        {/* Desktop Menu with Rounded Rectangle */}
        <div className="hidden md:flex space-x-8 text-gray-700 px-6 py-3 rounded-xl ring-2 ring-blue-600 bg-white">
          <ul className="flex space-x-8">
            <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a href="/impact" className="hover:text-blue-600">
                Impact
              </a>
            </li>
            {/* <li><a href="/contact" className="hover:text-blue-600">Contact</a></li> */}
          </ul>
        </div>

        {/* Contact Button */}
        <a
          href="/contact"
          className="hidden md:inline-block px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Get in Touch
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="py-4 space-y-4 text-center text-gray-700">
            <li>
              <a href="/" className="block px-6 py-2 hover:bg-gray-100">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block px-6 py-2 hover:bg-gray-100">
                About Us
              </a>
            </li>
            <li>
              <a href="/features" className="block px-6 py-2 hover:bg-gray-100">
                Features
              </a>
            </li>
            <li>
              <a href="/impact" className="block px-6 py-2 hover:bg-gray-100">
                Impact
              </a>
            </li>
            {/* <li><a href="/contact" className="block px-6 py-2 hover:bg-gray-100">Contact</a></li> */}
          </ul>

          {/* Mobile Contact Button */}
          <div className="py-4 flex justify-center">
            <a
              href="/contact"
              className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
