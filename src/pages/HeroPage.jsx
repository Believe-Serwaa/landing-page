import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import heroBackground from "../assets/images/buc.webp";

const HeroPage = () => {
  return (
    <motion.div
      className="relative text-white min-h-[600px] sm:min-h-[800px] md:min-h-[900px] flex items-center justify-center pt-[2rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Light Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div> {/* Lighter overlay */}
      </div>
       
      {/* Centered Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          className="inline-block p-4 sm:p-6 md:p-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-white/90 drop-shadow-lg">
            <Typewriter
              words={["IoT-Based Veronica Bucket"]}
              loop={1}
              typeSpeed={250}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/80 drop-shadow-md">
            Revolutionary smart hygiene solution for disease prevention
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroPage;