"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen scroll-mt-[6rem]"
    >
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Revolutionizing hygiene with cutting-edge technology for a healthier
            future.
          </p>
        </motion.div>

        {/* Product Introduction */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              The{" "}
              <span className="text-blue-500">SmartBucket</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
            The SmartBucket is an innovative IoT-based Veronica bucket designed to promote hygiene and prevent the spread of diseases like cholera by eliminating direct hand contact. Equipped with an automatic soap dispenser, touchless hand dryer, and sensor-activated water flow, it ensures a fully automated and sanitary handwashing experience. The system is designed for efficiency, conserving water and soap while maintaining maximum hygiene. Additionally, its adaptable power options, including a renewable energy feature, make it accessible even in areas with unreliable electricity. By integrating smart technology into a simple yet essential sanitation tool, the SmartBucket enhances public health efforts, particularly in underserved communities. Its real-time monitoring system tracks usage and ensures timely maintenance, preventing malfunctions. With a sleek and durable design, the SmartBucket is built to withstand various environmental conditions, making it a reliable solution for schools, hospitals, and public spaces.
            </p>
            
          </motion.div>

          {/* Product Image */}
          <motion.div
            className="flex-1 md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/bucket.webp"
              alt="IoT-Based Veronica Bucket"
              className="w-full max-w-sm sm:max-w-lg rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      
      {/* Innovator Spotlight Section */}
<section className="py-12 sm:py-16">
  <div className="container mx-auto px-4 max-w-6xl">
    <motion.h2
      className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
        Innovator Spotlight
      </span>
    </motion.h2>
    <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">

      {/* Innovator Image with Artistic Frame */}
<motion.div
  className="flex-1 flex justify-center"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
  <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem]">
    {/* Diagonal Gradient Overlay */}
    <div
      className="absolute -inset-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 
                  transform rotate-6 rounded-2xl shadow-md"
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

      {/* Geometric Accent Lines (Removed the blue line) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-12 h-1 bg-blue-500/50 transform -rotate-45 origin-top-left"></div>
      </div>
    </div>
  </div>
</motion.div>

      {/* Innovator Details */}
      <motion.div
        className="flex-1 bg-white p-6 sm:p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-4 sm:mb-6">
          <Award className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 mr-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
            Ernest Opoku Gyimah
          </h3>
        </div>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
          A visionary thinker focused on solving real-world challenges
          from Ahafo Hwidiem, Ghana, with a strong passion for addressing
          public health challenges through innovative solutions. His
          academic journey began at Our Lady of Apostles (OLA) Preparatory
          School, Hwidiem, where he demonstrated leadership as the main
          school prefect, completing in 2017. He later advanced his
          education at Obuasi Senior High Technical School, where his
          curiosity for innovation and practical problem-solving grew.
          Ernest is the innovator behind the IoT-based Veronica bucket, a
          pioneering solution designed to enhance hygiene and sanitation
          through innovation. His work is driven by a deep commitment to
          developing solutions that improve community well-being,
          especially in underserved areas. With a forward-thinking
          approach, Ernest continually explores ways to connect innovation
          with public health, ensuring that practical solutions remain
          accessible and impactful for communities in need. His vision is
          to create sustainable solutions that transform lives and inspire
          the next generation of African innovators.
        </p>
      </motion.div>
    </div>
  </div>
</section>

      {/* Mission & Vision Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-l-4 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mr-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                To improve public health through innovative hygiene solutions
                that prevent disease transmission in Ghana and beyond.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-l-4 border-cyan-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500 mr-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Our Vision
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                A future where smart hygiene technologies create healthier
                communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutPage;
