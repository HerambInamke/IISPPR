// Header.jsx - Main site header component
// Displays the site title, navigation links, contact button, and a search input with icon.
// Uses React Router's Link for navigation and Tailwind CSS for styling.

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      // Header uses a custom linear gradient background and flex layout
      className="px-26 py-4 flex justify-around items-center"
      style={{
        background:
          "linear-gradient(to bottom, #0a0a0a 10%,rgb(37, 42, 37) 45%,rgb(49, 56, 49) 55% ,rgb(143, 170, 123) 100%)",
      }}
    >
      {/* Site logo/title */}
      <div className="text-xl font-bold text-[white]">GiveLife</div>
      {/* Main navigation links (hidden on small screens) */}
      <nav className="hidden md:flex gap-6 text-[white] font-medium">
        {/* Navigation links to main pages */}
        <Link to="/" className="hover:text-[#C3FF00]">
          Home
        </Link>
        <Link to="/about" className="hover:text-[#C3FF00]">
          About
        </Link>
        <Link to="/testimonials" className="hover:text-[#C3FF00]">
          Testimonials
        </Link>
        <Link to="/gallery" className="hover:text-[#C3FF00]">
          Gallery
        </Link>
        <Link to="/projects" className="hover:text-[#C3FF00]">
          Projects
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        {/* Contact button */}
        <Link to="/contact">
          <button className="bg-[#C3FF00] px-4 py-2 rounded-3xl text-black font-semibold">
            Contact us
          </button>
        </Link>
        {/* Search input with icon */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded px-2 py-1 bg-[white] text-left"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7">
            {/* Search icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="36"
              height="36"
            >
              <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                <path d="M11 17a6 6 0 1 0 0-12a6 6 0 0 0 0 12M9.852 8.228A3 3 0 0 1 11 8a.5.5 0 0 0 0-1a4 4 0 0 0-4 4a.5.5 0 0 0 1 0a3 3 0 0 1 1.852-2.772"></path>
                <path
                  fillOpacity=".25"
                  d="M17.928 15a.5.5 0 1 0-.866-.5a7 7 0 0 1-2.562 2.562a.5.5 0 1 0 .5.866A8 8 0 0 0 16.292 17l2.854 2.855a.5.5 0 0 0 .708-.708l-2.855-2.854A8 8 0 0 0 17.93 15"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
