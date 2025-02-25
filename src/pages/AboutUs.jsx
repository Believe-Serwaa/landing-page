import React, { useEffect } from "react";
import {
  ArrowRightCircle,
  MapPin,
  Wrench,
  Shield,
  Star,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import innovatorImage from "../assets/images/ernest.jpg";
import veronicaBucketImage from "../assets/images/tap.jpg";

const AboutUs = () => {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
          element.classList.add("animate-visible");
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 500);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <RootLayout>
      <div className="min-h-screen bg-gray-100 font-sans text-gray-800 overflow-x-hidden py-20 pt-20 ">
        {/* Product Section with Animation */}
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 animate-on-scroll transition-all duration-1000 transform -translate-x-0 opacity-0">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="bg-blue-500 h-64 flex items-center justify-center">
                  {/* Replace the placeholder image with the imported one */}
                  <img
                    src={veronicaBucketImage}
                    alt="IoT Veronica Bucket"
                    className="max-h-56"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">
                    IoT Based Veronica Bucket
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <Shield
                        className="text-blue-500 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <p>
                        Prevents direct hand contact with surfaces to reduce
                        disease transmission
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Wrench
                        className="text-blue-500 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <p>
                        Features automatic soap dispenser, hand dryer, and water
                        flow system
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 animate-on-scroll transition-all duration-1000 transform translate-x-0 opacity-0">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">
                About Our Product
              </h2>
              <p className="text-lg mb-6">
                Our IoT Based Veronica Bucket was designed to combat
                hand-transmitted diseases like cholera and COVID-19. By
                eliminating the need to touch surfaces during handwashing, we're
                helping communities stay healthy.
              </p>
              <p className="text-lg mb-6">
                The system features fully automated components including a soap
                dispenser, water flow mechanism, and hand dryer - all working
                together to provide a complete, touchless handwashing solution.
              </p>
              <div className="flex flex-col gap-2 mb-8">
                <h3 className="text-xl font-semibold text-blue-700">
                  Our Vision
                </h3>
                <p className="border-l-4 border-blue-500 pl-4 italic">
                  To encourage individuals, especially students, to maintain
                  proper hand hygiene and prevent the spread of contagious
                  diseases.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/features"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Learn More
                  <ArrowRightCircle className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Innovator Section with Full Image */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12 animate-on-scroll transition-all duration-1000 transform translate-y-0 opacity-0">
              Meet the Innovator
            </h2>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3 flex justify-center animate-on-scroll transition-all duration-1000 transform -translate-x-0 opacity-0 -mt-10">
                <div className="rounded-lg shadow-lg">
                  <img
                    src={innovatorImage}
                    alt="Ernest Opoku Gyimah"
                    className="w-full h-auto max-w-md rounded-lg"
                  />
                </div>
              </div>

              <div className="md:w-2/3 animate-on-scroll transition-all duration-1000 transform translate-x-0 opacity-0">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  Ernest Opoku Gyimah
                </h3>
                <p className="text-lg mb-6">
                  Ernest is a passionate innovator from Hwidiem in the Ahafo
                  Region of Ghana. His journey began at Our Ladies of Apostle
                  Preparatory School (OLA) in Hwidiem, where he served as the
                  main school prefect until his completion in 2017.
                </p>
                <p className="text-lg mb-6">
                  He continued his education at Obuasi Senior High Technical
                  School, where he developed a keen interest in technology and
                  its potential to solve everyday problems.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg italic">
                    "According to the World Health Organization, about 58
                    percent of people who died from common diseases such as
                    COVID and cholera contracted them through hand contact. This
                    motivated me to design the IoT Veronica Bucket to help
                    prevent these unnecessary deaths."
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add CSS for animations */}
        <style jsx>{`
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }

          .animate-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transform: translateX(0) !important;
          }
        `}</style>
      </div>
    </RootLayout>
  );
};

export default AboutUs;
