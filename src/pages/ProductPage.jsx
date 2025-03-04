import React from "react";
import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Smartphone, HeartPulse, Users, CloudRain } from "lucide-react";

// Import local images
import productImage from "../assets/images/tap.jpg";
import feature1Image from "../assets/images/tap.jpg";
import feature2Image from "../assets/images/tap.jpg";
import feature3Image from "../assets/images/tap.jpg";

const ProductPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800 min-h-screen">
      
      

      {/* Product Overview Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Smart Hand Hygiene Solution
              </h2>
              <p className="text-gray-600 mb-6">
                The IoT-based Veronica Bucket is a cutting-edge handwashing solution designed to promote hygiene, conserve water, and provide real-time monitoring for better resource management.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span>Touchless operation for improved hygiene.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span>Automated water and soap dispensing.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span>Real-time monitoring and alerts.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={productImage}
                alt="IoT-Based Veronica Bucket"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Key Features
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the innovative features that make our IoT-based Veronica Bucket stand out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Touchless Operation"
                icon={<ShieldCheck className="w-8 h-8 text-white" />}
                image={feature1Image}
                description="Ensures hygienic handwashing by eliminating the need for physical contact."
              />
              <FeatureCard
                title="Water Conservation"
                icon={<Droplets className="w-8 h-8 text-white" />}
                image={feature2Image}
                description="Optimizes water usage with automated sensors, reducing waste."
              />
              <FeatureCard
                title="Real-Time Monitoring"
                icon={<Smartphone className="w-8 h-8 text-white" />}
                image={feature3Image}
                description="Tracks water and soap levels, sending alerts for refills and maintenance."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our IoT-based Veronica Bucket is designed to make a difference in health, environment, and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <BenefitCard
                icon={<HeartPulse className="w-8 h-8 text-blue-500" />}
                title="Improved Health"
                description="Reduces the spread of diseases through better hand hygiene."
              />
              <BenefitCard
                icon={<Droplets className="w-8 h-8 text-green-500" />}
                title="Water Savings"
                description="Saves up to 30% water compared to traditional handwashing methods."
              />
              <BenefitCard
                icon={<Users className="w-8 h-8 text-purple-500" />}
                title="Community Impact"
                description="Deployed in schools, hospitals, and public spaces to empower communities."
              />
              <BenefitCard
                icon={<CloudRain className="w-8 h-8 text-cyan-500" />}
                title="Sustainability"
                description="Promotes eco-friendly practices with efficient resource management."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Transform Hand Hygiene?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in promoting better health, saving water, and empowering communities with our IoT-based Veronica Bucket.
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

// FeatureCard Component
const FeatureCard = ({ title, icon, image, description }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

// BenefitCard Component
const BenefitCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-sm text-center transform hover:scale-105 transition duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default ProductPage;