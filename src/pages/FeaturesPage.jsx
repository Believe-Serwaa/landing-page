"use client";
import React from "react";
import { Droplet, Waves, Wind, Package, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <motion.div
    className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-t-4"
    style={{ borderTopColor: color }}
    whileHover={{ y: -10, scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    {/* Background Gradient */}
    <div
      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background: `linear-gradient(135deg, ${color} 0%, #ffffff 100%)`,
      }}
    ></div>

    {/* Background Circles */}
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Icon */}
    <div className="relative z-10">
      <div
        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto`}
        style={{ backgroundColor: color }}
      >
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>

      {/* Text Content */}
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 text-center">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 text-center">{description}</p>
    </div>
  </motion.div>
);

const FeaturesPage = () => {
  return (
    <section
      id="features"
      className="bg-gradient-to-br from-indigo-50 to-cyan-100 scroll-mt-[6rem] pt-10 pb-20"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 mb-4">
            Innovative Features
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced technology designed to revolutionize hand hygiene
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={Droplet}
              title="Touchless Soap Dispenser"
              description="Our advanced touchless soap dispenser ensures a hygienic handwashing experience by automatically dispensing the perfect amount of soap without the need for physical contact."
              color="#3B82F6"
            />
            <FeatureCard
              icon={Waves}
              title="Touchless Tap"
              description="The touchless tap uses motion sensors to detect hands and dispense water seamlessly, eliminating the need to touch potentially contaminated surfaces."
              color="#06B6D4"
            />
            <FeatureCard
              icon={Wind}
              title="Hand Dryer"
              description="The built-in hand dryer provides fast, hygienic drying with powerful airflow, ensuring a touch-free and bacteria-free experience."
              color="#3B82F6"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          className="container mx-auto px-4 mt-8 sm:mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 sm:p-8 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Why <span className="text-white/80">Choose</span> Our Smart
                Hygiene System?
              </h3>
              <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
                Revolutionizing hygiene with cutting-edge technology that
                prioritizes safety, efficiency, and user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 p-6 sm:p-12">
              {/* Feature 1 */}
              <div className="relative group">
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 
                        rounded-2xl opacity-50 group-hover:opacity-75 transition duration-300 
                        blur-md group-hover:blur-lg"
                ></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-lg text-center h-full">
                  <div
                    className="bg-blue-100 text-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full 
                          flex items-center justify-center mx-auto mb-4
                          transform group-hover:scale-110 transition duration-300"
                  >
                    <Droplet className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    Hygienic & Safe
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Advanced technology minimizes surface contact, dramatically
                    reducing bacterial and viral transmission.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative group">
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 
                        rounded-2xl opacity-50 group-hover:opacity-75 transition duration-300 
                        blur-md group-hover:blur-lg"
                ></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-lg text-center h-full">
                  <div
                    className="bg-blue-100 text-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full 
                          flex items-center justify-center mx-auto mb-4
                          transform group-hover:scale-110 transition duration-300"
                  >
                    <Package className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    Lightweight & Compact
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Sleek, portable design ensures easy installation across
                    diverse environments and spaces.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative group">
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 
                        rounded-2xl opacity-50 group-hover:opacity-75 transition duration-300 
                        blur-md group-hover:blur-lg"
                ></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-lg text-center h-full">
                  <div
                    className="bg-blue-100 text-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full 
                          flex items-center justify-center mx-auto mb-4
                          transform group-hover:scale-110 transition duration-300"
                  >
                    <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    Smart & Efficient
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Intelligent automation optimizes performance, reducing waste
                    and simplifying maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesPage;