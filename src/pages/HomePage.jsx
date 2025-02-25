import React from "react";
import {
  Award,
  Droplet,
  Waves,
  Wind,
  Users,
  ChevronRight,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import RootLayout from "../layouts/RootLayout";
import { Typewriter } from "react-simple-typewriter";


const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="relative bg-white w-64 h-72 p-6 rounded-xl rounded-tr-[50px] shadow-lg transition-transform transform hover:scale-105 group overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Wave Pattern Overlay */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-3xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-tr-3xl"></div>
      <div
        className="absolute inset-0 bg-white/20 rounded-tr-[50px]"
        style={{
          backgroundImage: "url('/wave-pattern.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>

    {/* Icon */}
    <Icon className="w-12 h-12 text-blue-500 relative z-10 transition-all duration-300 group-hover:text-white" />

    {/* Text Content */}
    <div className="mt-6 relative z-10">
      <h3 className="text-xl font-semibold text-gray-900 transition-all duration-300 group-hover:text-white">
        {title}
      </h3>
      <p className="text-gray-600 transition-all duration-300 group-hover:text-white mt-2">
        {description}
      </p>
    </div>

    {/* Read More Button */}
    <button className="mt-4 flex items-center font-semibold text-blue-500 transition-all duration-300 group-hover:text-white relative z-10">
      Read More{" "}
      <ChevronRight className="ml-1 w-4 h-4 transition-all duration-300 group-hover:text-white" />
    </button>
  </motion.div>
);

const HomePage = () => {
  
  return (
    <RootLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4  pt-32 pb-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <Typewriter
                  words={["IoT-Based Veronica Bucket"]}
                  loop={3}
                  cursor
                  cursorStyle="🚀"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="text-xl mb-8">
                Revolutionary smart hygiene solution for disease prevention
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-blue-50 transition-colors">
                Learn More <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Smart Features
          </h2>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="col-span-1">
              <FeatureCard
                icon={Droplet}
                title="Touchless Soap Dispenser"
                description="Automated soap dispensing system for better hygiene"
              />
            </div>
            <div className="col-span-1">
              <FeatureCard
                icon={Waves}
                title="Automated Water Flow"
                description="Sensor-based water flow to prevent contamination"
              />
            </div>
            <div className="col-span-1">
              <FeatureCard
                icon={Wind}
                title="Hand Dryer"
                description="Built-in fast hand dryer for a touch-free experience"
              />
            </div>
          </div>
        </div>

        {/* About Innovator */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
  About <span className="text-blue-500">What We Do</span> & Who We Are
</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <Award className="w-6 h-6 text-blue-600 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold">Ernest Opoku Gyimah</h3>
                    <p className="text-gray-600">
                      Former main school prefect at OLA Preparatory School,
                      Hwidiem (2017) Graduate of Obuasi Senior High Technical
                      School (2020)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Impact Section */}
        <div className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Health Impact</h2>
              <motion.div
                className="bg-white p-6 rounded-lg shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start">
                  <Star className="w-6 h-6 text-blue-600 mr-2 mt-1" />
                  <p className="text-gray-600">
                    According to WHO, 58% of deaths from common diseases like
                    COVID-19 and cholera are attributed to poor hygiene. This
                    innovation aims to address this critical issue by promoting
                    better hand hygiene practices, especially among students.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default HomePage;
