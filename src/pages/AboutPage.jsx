"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <section id="about" className="bg-blue-50 min-h-screen scroll-mt-[6rem]">
     {/* Hero Section */}
<div className="relative py-12 sm:py-16">
  <div className="container mx-auto px-6 sm:px-12 max-w-6xl text-center">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-6 sm:mb-10"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-600 relative">
        <span className="relative z-10">About Us</span>
        <span className="absolute left-1/2 -bottom-2 w-24 h-2 bg-sky-500 rounded-full transform -translate-x-1/2 animate-pulse"></span>
      </h1>
     
    </motion.div>
  </div>
</div>


      {/* Innovator Spotlight Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Heading - Adjusted margin-bottom */}
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10" // Increased margin-bottom
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 mb-4 sm:mb-6 inline-block">
              Innovator Spotlight
            </span>
          </motion.h2>

          {/* Content Container */}
          <div className="flex flex-col md:flex-row items-center gap-y-12 sm:gap-12">
            {/* Innovator Image with Artistic Frame */}
            <motion.div
              className="flex-1 w-full md:flex-1 flex justify-center pl-8 md:pl-12 pr-12 md:pr-16 mb-8 sm:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem]">
                {/* Diagonal Gradient Overlay */}
                <div
                  className="absolute -inset-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 
                    transform rotate-6 origin-center rounded-2xl shadow-md"
                ></div>

                {/* Image Container with Asymmetric Frame */}
                <div
                  className="relative w-full h-full overflow-hidden rounded-2xl 
                    border-4 border-white shadow-2xl"
                >
                  <img
                    src="/ernest.jpg"
                    alt="Ernest Opoku Gyimah"
                    className="w-full h-full object-cover"
                  />

                  {/* Geometric Accent Lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-12 h-1 bg-blue-500/50 transform -rotate-45 origin-top-left"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Innovator Details */}
            <motion.div
              className="flex-1 bg-white p-6 sm:p-8 rounded-xl shadow-lg mx-10 md:mx-12 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Meet Our Founder Badge - Positioned on top of the card */}
              <motion.div
                className="absolute -top-6 right-6 z-20" // Adjusted top and right values
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 font-medium text-sm shadow-sm">
                  <Sparkles className="w-4 h-4 mr-2" /> Meet Our Founder
                </div>
              </motion.div>

              {/* Name and Award Icon */}
              <div className="flex items-center mb-4 sm:mb-6">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-sky-500 mr-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Ernest Opoku Gyimah</h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                A visionary thinker focused on solving real-world challenges from Ahafo Hwidiem, Ghana, with a strong
                passion for addressing public health challenges through innovative solutions. His work is driven by a
                deep commitment to developing solutions that improve community well-being, especially in rural areas.
                With a forward-thinking approach, Ernest continually explores ways to connect innovation with public
                health, ensuring that practical solutions remain accessible and impactful for communities in need. His
                vision is to create sustainable solutions that transform lives and inspire the next generation of
                African innovators.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-blue-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            {/* Our Mission Card */}
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-xl border-l-4 border-blue-500 mx-12"
              style={{
                boxShadow: "0 4px 6px -1px rgba(14, 165, 233, 0.1), 0 2px 4px -1px rgba(14, 165, 233, 0.05)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mr-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                To improve public health through innovative hygiene solutions that prevent disease transmission in
                Ghana and beyond.
              </p>
            </motion.div>

            {/* Our Vision Card */}
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-xl border-l-4 border-cyan-500 mx-12"
              style={{
                boxShadow: "0 4px 6px -1px rgba(14, 165, 233, 0.1), 0 2px 4px -1px rgba(14, 165, 233, 0.05)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500 mr-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                A future where smart hygiene technologies create healthier communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Product Heading */}
      <motion.div
        className="text-center mt-10 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
          Our Product
        </h2>
      </motion.div>

      {/* Product Introduction */}
      <div className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Text Content */}
            <div className="flex-1 relative z-10 pl-12 md:pl-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 font-medium text-sm mb-6">
                <span className="mr-2 bg-sky-500 w-2 h-2 rounded-full"></span>
                Revolutionary Sanitation Technology
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Introducing the
                <div className="mt-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                  SmartBucket
                </div>
              </h2>

              <div className="prose prose-lg text-gray-600 mb-8 max-w-2xl">
                <p>
                  The SmartBucket is an innovative IoT-based Veronica bucket that enhances hygiene and helps prevent disease transmission, such as cholera, by eliminating direct hand contact.
                </p>
                <p className="mt-4">
                  Equipped with an automatic soap dispenser, automatic hand blower, and sensor-activated water flow, it
                  ensures a fully automated and sanitary handwashing experience.
                </p>
              </div>
            </div>

            {/* Product Image */}
            <div className="flex-1 md:w-1/2 relative z-10 pr-12 md:pr-16">
              <div className="relative">
                {/* Image Decorations */}
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-200 to-blue-200 rounded-2xl opacity-30 blur-xl"></div>
                <div className="absolute -inset-0.5 bg-white/80 backdrop-blur-sm rounded-2xl"></div>

                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-white to-sky-50 p-6 rounded-2xl shadow-xl border border-sky-100/50">
                  <img
                    src="/buk.webp"
                    alt="IoT-Based Veronica Bucket"
                    className="w-full rounded-lg object-cover shadow-md"
                  />

                  {/* Floating Elements - Icon-Only Badges */}
                  <div className="absolute -top-5 -right-5 bg-white rounded-full p-3 shadow-lg border border-sky-100">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>

                  <div className="absolute -bottom-5 -left-5 bg-white rounded-full p-3 shadow-lg border border-sky-100">
                    <div className="w-3 h-3 bg-sky-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Decorative Dots */}
                <div className="absolute -right-4 top-1/4 w-8 h-24 flex flex-col gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-300"></div>
                  <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <div className="w-2 h-2 rounded-full bg-sky-600"></div>
                </div>

                <div className="absolute -left-4 bottom-1/4 w-8 h-24 flex flex-col gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;