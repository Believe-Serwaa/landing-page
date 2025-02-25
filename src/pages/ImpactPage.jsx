import React from "react";
import { Check, Droplet } from "lucide-react";
import RootLayout from "../layouts/RootLayout";

const FaucetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="text-cyan-600 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 8h16M7 8V4h10v4m-3 4v6h2l-3 3-3-3h2v-6M5 20h14"
    />
  </svg>
);

const HealthImpactPage = () => {
  return (
    <RootLayout>
      <div className="min-h-screen flex flex-col bg-gray-50 py-16 px-4 md:px-8 pt-32">
        <header className="max-w-6xl mx-auto text-center mb-12">
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-3">
            Transforming Public Health
          </h1> */}
          <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-gray-700">
  The Impact of IoT-Enabled Veronica Buckets
</h2>

          <p className="mt-4 text-base sm:text-lg text-blue-800">
            Smart handwashing solutions for healthier communities
          </p>
        </header>

        <main className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-800 mb-4">
                Revolutionizing Hand Hygiene in Public Spaces
              </h3>
              <p className="text-gray-700 mb-6">
                Our IoT-enabled Veronica Buckets combine traditional handwashing
                with cutting-edge technology to create a powerful tool in the
                fight against infectious diseases.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-blue-900 text-sm sm:text-base">
                  Handwashing with soap can reduce respiratory infections by 21%
                  and diarrheal diseases by 30% in community settings.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 p-4 flex justify-center">
              <div className="w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-cyan-600 rounded-full flex items-center justify-center shadow-xl">
                <div className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-white rounded-full flex flex-col items-center justify-center">
                  <FaucetIcon />
                  <Droplet className="text-blue-500 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mt-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <h3 className="text-2xl font-bold text-center text-blue-800 mb-8">
            Health Benefits
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Prevents Infectious Diseases",
                color: "bg-blue-600",
                benefits: [
                  "Touchless operation reduces cross-contamination",
                  "Lowers risk of COVID-19, cholera, and flu",
                  "Ensures proper handwashing technique",
                ],
              },
              {
                title: "Encourages Hand Hygiene",
                color: "bg-cyan-600",
                benefits: [
                  "Automated soap and water dispensing",
                  "Reminders for recommended duration",
                  "Real-time tracking reinforces good habits",
                ],
              },
              {
                title: "Reduces Waterborne Diseases",
                color: "bg-blue-500",
                benefits: [
                  "Clean and controlled water flow",
                  "Minimizes exposure to contaminated sources",
                  "Reduces diarrhea, typhoid, and dysentery",
                ],
              },
              {
                title: "Enhances Hygiene in High-Risk Areas",
                color: "bg-cyan-500",
                benefits: [
                  "Ideal for hospitals, schools, and markets",
                  "Integrates with antibacterial coatings",
                  "Prevents infections in crowded settings",
                ],
              },
              {
                title: "Promotes Community Health",
                color: "bg-blue-700",
                benefits: [
                  "Monitors hygiene trends",
                  "Enables better public health policies",
                  "Reduces preventable illness healthcare costs",
                ],
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div className={`${benefit.color} p-4`}>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {benefit.title}
                  </h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {benefit.benefits.map((text, i) => (
                      <li key={i} className="flex items-start">
                        <Check
                          className="text-green-500 mr-2 flex-shrink-0 mt-1"
                          size={20}
                        />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-cyan-500 rounded-xl shadow-lg p-8 text-center text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Join the Health Revolution
            </h3>
            <p className="mb-6 text-sm sm:text-base">
              Help us bring IoT-enabled Veronica Buckets to more communities and
              create lasting health impact
            </p>
            <button
              className="bg-white text-blue-500 font-bold py-3 px-6 sm:px-8 rounded-full hover:bg-blue-50 transition-colors"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Involved Today
            </button>
          </div>
        </main>
      </div>
    </RootLayout>
  );
};

export default HealthImpactPage;
