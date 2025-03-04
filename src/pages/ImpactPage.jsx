"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Smartphone, PieChart as ChartPie, HeartPulse, Leaf, Target } from "lucide-react";

const ImpactCard = ({ title, icon, description, bgColor, textColor }) => (
  <motion.div
    className={`p-6 rounded-3xl shadow-2xl transform transition duration-300 hover:-translate-y-2 hover:shadow-xl ${bgColor} ${textColor}`}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 p-4 rounded-full bg-white/20">
        {React.cloneElement(icon, { className: "w-8 h-8 sm:w-10 sm:h-10" })}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base opacity-80">{description}</p>
    </div>
  </motion.div>
);

const ImpactPage = () => {
  return (
    <section id="impact" className="bg-gradient-to-br from-indigo-50 to-cyan-100 min-h-screen scroll-mt-[6rem] pt-10 pb-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 mb-4">
            Impact of SmartBucket
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming hand hygiene through innovative technology and thoughtful design
          </p>
        </motion.div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-16">
          <ImpactCard
            title="Health Benefits"
            icon={<ShieldCheck />}
            description="Reduces disease transmission by enhancing hand hygiene practices"
            bgColor="bg-blue-500/10"
            textColor="text-blue-900"
          />
          <ImpactCard
            title="Environmental Sustainability"
            icon={<Leaf />}
            description="Optimizes water usage and promotes eco-friendly solutions"
            bgColor="bg-green-500/10"
            textColor="text-green-900"
          />
          <ImpactCard
            title="Smart Monitoring"
            icon={<Target />}
            description="Provides real-time insights and automated performance tracking"
            bgColor="bg-purple-500/10"
            textColor="text-purple-900"
          />
        </div>

        {/* Detailed Impact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <HeartPulse className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mr-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Public Health</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Dramatically improves community health by providing accessible handwashing solutions in underserved areas, 
              significantly reducing the risk of waterborne and communicable diseases.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 b rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <ChartPie className="w-8 h-8 sm:w-12 sm:h-12 text-cyan-600 mr-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Educational Impact</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Cultivates lifelong hygiene habits by making handwashing engaging and accessible, 
              with particular focus on educating and empowering children in schools and communities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactPage;