import React from "react";
import { motion } from "framer-motion";
import RootLayout from "../layouts/RootLayout";
import { Droplet, Waves, Wind, Sparkles, ShieldCheck, Leaf, Package } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-md">
      <Icon className="w-12 h-12 text-blue-500" />
    </div>
    <h3 className="text-2xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);



const Features = () => {
  return (
    <RootLayout>
      <div className="relative min-h-screen bg-gray-50 py-20 pt-20 pb-32 overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 top-[50px] pointer-events-none z-10">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
  className="absolute bottom-4 right-16 w-24 h-24 bg-blue-300 rounded-full opacity-25"
  animate={{ scale: [1, 1.2, 1] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
/>

        </div>

        <div className="container mx-auto px-6 pt-8 relative z-10">
          {/* Heading with Animation */}
          <motion.h2
            className="text-4xl font-bold text-center mb-6 text-gray-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Smart <span className="text-blue-500">Features </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our innovative hygiene solutions are designed to provide a
            completely touch-free experience, enhancing safety and efficiency
            in handwashing.
          </motion.p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
            <FeatureCard
              icon={Droplet}
              title="Touchless Soap Dispenser"
              description="An automated soap dispensing system ensures better hygiene by eliminating direct contact, reducing the spread of germs."
            />
            <FeatureCard
              icon={Waves}
              title="Automated Water Flow"
              description="A sensor-based water flow system prevents contamination, providing a seamless and efficient handwashing experience."
            />
            <FeatureCard
              icon={Wind}
              title="Hand Dryer"
              description="Our built-in high-speed hand dryer offers a quick, touch-free drying experience, minimizing paper waste and improving convenience."
            />
            <FeatureCard
              icon={Sparkles}
              title="Self-Cleaning Technology"
              description="Built-in self-cleaning mechanisms ensure surfaces remain sanitized, reducing maintenance and enhancing user safety."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Bacteria-Resistant Coating"
              description="Our hygiene solutions feature antimicrobial surfaces that actively prevent the growth of bacteria and viruses."
            />
            <FeatureCard
              icon={Leaf}
              title="Eco-Friendly Design"
              description="Using minimal water and energy, our products are designed for sustainability, reducing environmental impact."
            />
          </div>

          <motion.div
  className="mt-32 bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-lg shadow-xl"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center ">
    Why Choose  <span className="text-blue-500">Our Smart</span> Hygiene System? 
  </h3>
  <div className="grid md:grid-cols-3 gap-8 text-center">
    <div>
      <motion.div
        className="bg-white p-6 rounded-full inline-block mb-4 shadow-md"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Droplet className="w-12 h-12 text-blue-500" />
      </motion.div>
      <h4 className="text-xl font-semibold text-gray-900 mb-2">Hygienic & Safe</h4>
      <p className="text-gray-600">
        Reduces direct contact with surfaces, preventing the spread of bacteria and viruses.
      </p>
    </div>
    <div>
      <motion.div
        className="bg-white p-6 rounded-full inline-block mb-4 shadow-md"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
         <Package className="w-12 h-12 text-blue-500" />
      </motion.div>
      <h4 className="text-xl font-semibold text-gray-900 mb-2">Lightweight & Compact</h4>
      <p className="text-gray-600">
        Designed for easy installation and portability, making it suitable for various spaces.
      </p>
    </div>
    <div>
      <motion.div
        className="bg-white p-6 rounded-full inline-block mb-4 shadow-md"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ShieldCheck className="w-12 h-12 text-blue-500" />
      </motion.div>
      <h4 className="text-xl font-semibold text-gray-900 mb-2">Smart & Efficient</h4>
      <p className="text-gray-600">
        Advanced automation ensures seamless operation, reducing waste and maintenance.
      </p>
    </div>
  </div>
</motion.div>

        </div>
      </div>
    </RootLayout>
  );
};

export default Features;
