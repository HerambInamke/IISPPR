// This component displays a custom search not found page with a sad magnifying glass illustration.
// It uses Navbar and Footer for consistent layout, and a button to navigate back to the home page.

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex-col bg-[#A5BF8A] text-center py-12 px-4 items-center justify-center ">
        <div className="flex justify-center">
          {/* SVG illustration: Magnifying glass with sad face */}
          <svg
            viewBox="0 0 64 64"
            className="w-30 h-30 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {/* Magnifying glass */}
            <circle cx="27" cy="27" r="16" strokeWidth="3" />
            <line x1="39" y1="39" x2="58" y2="58" strokeWidth="3" />

            {/* Sad face inside magnifying glass */}
            <circle cx="22" cy="24" r="1.5" fill="currentColor" />
            <circle cx="32" cy="24" r="1.5" fill="currentColor" />
            <path
              d="M22 32 Q27 28 32 32"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        {/* Main message and instructions */}
        <h2 className="text-4xl font-bold mb-2">Oops! Search Not Found</h2>
        <p className="text-gray-700 mb-6">
          Nothing matched your search criteria. Please try again with different
          keywords.
        </p>
        <div className="flex justify-center gap-2">
          {/* Button to navigate back to home page */}
          <button
            className="bg-[#A5BF8A] text-black px-4 py-2 font-light border"
            onClick={() => navigate("/")}
          >
            Go Back to Home Page
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
