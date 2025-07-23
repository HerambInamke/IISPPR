import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Handshake, Users, Heart, Globe, Search } from "lucide-react";

// Stats Section Data
const stats = [
  {
    icon: <Handshake className="w-10 h-10 text-[#0F1B2B]" />,
    numericValue: 4597,
    label: "People Rised",
  },
  {
    icon: <Users className="w-10 h-10 text-[#0F1B2B]" />,
    numericValue: 8945,
    label: "Volunteer",
  },
  {
    icon: <Heart className="w-10 h-10 text-[#0F1B2B]" />,
    numericValue: 10000000,
    label: "Poor People Saved",
  },
  {
    icon: <Globe className="w-10 h-10 text-[#0F1B2B]" />,
    numericValue: 100,
    label: "Country Member",
  },
];

const AnimatedCounter = ({ numericValue }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 50;
      const stepTime = duration / steps;
      let currentCount = 0;

      const timer = setInterval(() => {
        currentCount += numericValue / steps;
        if (currentCount >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  const displayValue =
    numericValue >= 1000000
      ? `${Math.floor(count / 1000000)}M+`
      : numericValue >= 1000
      ? `${Math.floor(count)}+`
      : `${count}+`;

  return (
    <motion.h3
      ref={counterRef}
      className="text-2xl sm:text-3xl font-bold text-[#0F1B2B] mt-4"
    >
      {displayValue}
    </motion.h3>
  );
};

const StatCard = ({ icon, numericValue, label }) => (
  <div className="bg-[#EAF3FB] rounded-lg shadow-md flex flex-col items-center text-center p-6">
    <div className="bg-white p-4 rounded-full border border-gray-300">
      {icon}
    </div>
    <AnimatedCounter numericValue={numericValue} />
    <p className="text-[#4B4B4B] mt-1">{label}</p>
  </div>
);

// ✅ Updated Report Card Design
const ReportCard = ({ title, date, description }) => (
  <div className="w-[1267.68px] h-[285px] bg-white rounded-2xl shadow-md flex mx-auto overflow-hidden">
    {/* Image placeholder */}
    <div className="w-[300px] h-full bg-gray-300" />

    {/* Content */}
    <div className="flex flex-col justify-between p-6 flex-1">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-orange-500 font-semibold">{date}</p>
        <h3 className="text-xl font-bold text-[#0F1B2B]">{title}</h3>
        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>
      <button className="bg-[#0F1B2B] text-white px-6 py-2 rounded-full text-sm self-end mt-4">
        Learn more
      </button>
    </div>
  </div>
);

const Reports = () => {
  return (
    <div className="w-full font-[Playfair]">
      {/* ==================== STATS SECTION ==================== */}
      <section className="bg-[#0F1B2B] w-full py-20 px-4 text-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold mb-4">Reports</h1>
              <p className="text-gray-300">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Fusce
                Elementum Sem Quis Eros Posuere. Vitae Tempor Tellus Porta. Sed
                Ultricies Libero Quis Sem Porttitor Lacinia. Nunc A Ultrices Ex.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-sm text-gray-400">Our Statistics</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Our Impact Across The Years
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== REPORTS LIST SECTION ==================== */}
      <section className="bg-white w-full py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-[#0F1B2B] mb-4 sm:mb-0">
              Reports
            </h2>
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full sm:w-80">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search Reports"
                className="outline-none bg-transparent text-sm w-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <ReportCard
                key={i}
                title={`Report ${i}`}
                date="Date"
                description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Fusce Elementum Sem Quis Eros Posuere. Vitae Tempor Tellus Porta. Sed Ultricies Libero Quis Sem Porttitor Lacinia. Nunc A Ultrices Ex."
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;
