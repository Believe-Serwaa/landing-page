import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ContactForm from "./pages/ContactForm";
import LoadingSpinner from "./components/LoadingSpinner"; // Import the LoadingSpinner
import HeroPage from "./pages/HeroPage";
import FeaturesPage from "./pages/FeaturesPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import ImpactPage from "./pages/ImpactPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading spinner only if it's the first visit
    if (!sessionStorage.getItem("hasLoaded")) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true"); // Store flag in sessionStorage
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false); // If already loaded before, don't show spinner
    }
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "contact", element: <ContactForm /> },
    { path: "hero", element: <HeroPage /> },
    { path: "features", element: <FeaturesPage /> },
    { path: "about", element: <AboutPage /> },
    { path: "impact", element: <ImpactPage /> },
    { path: "product", element: <ProductPage /> },
  ]);

  return (
    <>
      {/* Render router and show spinner only as an overlay */}
      <RouterProvider router={router} />
      {isLoading && <LoadingSpinner />} {/* Spinner overlays the content */}
    </>
  );
}

export default App;
