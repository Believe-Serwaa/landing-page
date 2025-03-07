import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import heroBackground from "../assets/images/ver.jpg";

const HeroPage = () => {
  // Animation variants for the tagline
  const taglineCharacters = "Revolutionary smart hygiene solution for disease prevention".split("");
  
  // Track typewriter completion cycles to trigger staggered text animation
  const [animationCycle, setAnimationCycle] = useState(0);
  const [showTagline, setShowTagline] = useState(true);
  
  // Function to reset and restart the tagline animation
  const resetTaglineAnimation = () => {
    setShowTagline(false);
    setTimeout(() => setShowTagline(true), 50); // Brief delay before showing again
    setAnimationCycle(prev => prev + 1);
  };
  
  return (
    <motion.div
      className="relative text-white min-h-[600px] sm:min-h-[800px] md:min-h-[900px] flex items-center justify-center pt-[2rem] w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Centered Content */}
      <div className="container mx-auto px-4 relative z-10 text-center mt-4 sm:mt-0 md:mt-8 max-w-7xl">
        <motion.div
          className="inline-block p-4 sm:p-6 md:p-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-white/90 drop-shadow-lg">
            <Typewriter
              words={["SmartBucket"]}
              loop={2}
              typeSpeed={250}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={resetTaglineAnimation}
              onType={(count) => {
                // When typing is complete (count === string length)
                if (count === "SmartBucket".length) {
                  // Wait for the delaySpeed duration before starting the next cycle
                  setTimeout(resetTaglineAnimation, 1000);
                }
              }}
            />
          </h1>
          
          {/* Animated tagline */}
          <AnimatePresence mode="wait">
            {showTagline && (
              <div className="overflow-hidden mb-6 sm:mb-8" key={animationCycle}>
                <div className="flex flex-wrap justify-center">
                  {taglineCharacters.map((char, index) => (
                    <motion.span
                      key={index}
                      className="text-lg sm:text-xl md:text-2xl text-white/80 drop-shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + index * 0.03,
                        ease: "easeOut"
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroPage;