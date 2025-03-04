"use client";
import React from "react";
import Navbar from "../components/Navbar";
import AboutPage from "./AboutPage";
import FeaturesPage from "./FeaturesPage";
import ImpactPage from "./ImpactPage";
import HeroPage from "./HeroPage";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <main className="relative bg-blue-50 min-h-screen">
      <Navbar />
      <HeroPage />
      <AboutPage />
      <FeaturesPage />
      <ImpactPage />
      <Footer />
    </main>
  );
}

export default HomePage;
