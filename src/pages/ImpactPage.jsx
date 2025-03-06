"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, PieChart as ChartPie, HeartPulse, Leaf, TrendingDown } from "lucide-react";

const ImpactCard = ({ title, icon, description, bgColor, textColor }) => (
  <motion.div
    className={`p-4 sm:p-5 rounded-2xl shadow-xl transform transition duration-300 hover:-translate-y-2 hover:shadow-lg max-w-[280px] sm:max-w-[320px] mx-auto ${bgColor} ${textColor}`}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 p-3 rounded-full bg-white/20">
        {React.cloneElement(icon, { className: "w-7 h-7 sm:w-9 sm:h-9" })}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{title}</h3>
      <p className="text-xs sm:text-sm opacity-80">{description}</p>
    </div>
  </motion.div>
);

const ImpactPage = () => {
  return (
    <section id="impact" className="bg-blue-50 min-h-screen scroll-mt-[6rem] pt-10 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 mb-4">
            Impact of SmartBucket
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming hand hygiene through innovative technology and thoughtful design
          </p>
        </motion.div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-12 mb-12 sm:mb-16 lg:mb-20">


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
            title="Operational Efficiency "
            icon={<TrendingDown />}
            description="Saves costs on excessive water and soap consumption through controlled dispensing"
            bgColor="bg-purple-500/10"
            textColor="text-purple-900"
          />
        </div>

        {/* Detailed Impact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-6 sm:px-10 lg:px-16 xl:px-20">
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