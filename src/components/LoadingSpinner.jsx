import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.jpeg"; // Import the logo

const LoadingSpinner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the page was fully reloaded or opened for the first time
    const navigationType = performance.getEntriesByType("navigation")[0]?.type;

    if (navigationType === "reload" || !sessionStorage.getItem("hasLoaded")) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null; // Hide spinner if not needed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 z-50">
      <div className="flex flex-col items-center">
        <div className="relative w-36 h-36">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full rounded-full object-cover animate-pulse"
          />
          <div className="absolute -inset-4 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-300 text-sm">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
