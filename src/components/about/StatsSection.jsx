import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Handshake, Users, Heart, Globe } from "lucide-react";

const stats = [
  {
    icon: <Handshake className="w-20 h-20 text-[#568C20]" />,
    numericValue: 10000,
    value: "10K+",
    label: "People Reached",
    progress: "75 25",
  },
  {
    icon: <Users className="w-20 h-20 text-[#568C20]" />,
    numericValue: 50000,
    value: "50k+",
    label: "People on Social Media",
    progress: "80 20",
  },
  {
    icon: <Heart className="w-20 h-20 text-[#568C20]" />,
    numericValue: 8000,
    value: "8k+",
    label: "Women reached",
    progress: "85 15",
  },
  {
    icon: <Globe className="w-20 h-20 text-[#568C20]" />,
    numericValue: 53,
    value: "53",
    label: "Country Research Communities",
    progress: "50 50",
  },
];

const AnimatedCounter = ({ value, numericValue }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
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

  return (
    <motion.h3 
      ref={counterRef}
      className="text-4xl font-bold text-black m-5"
    >
      {numericValue >= 1000 ? `${Math.floor(count / 1000)}K+` : count}
    </motion.h3>
  );
};

const StatCard = ({ icon, value, numericValue, label, progress }) => (
  <div className="bg-[#4D932426] flex flex-col items-center justify-center p-6 w-full pb-10 font-[montserrat]">
    <div className="relative w-32 h-32 m-4 bg-white rounded-full">
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r="16.5"
          fill="none"
          stroke="#C4C4C4"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle
          cx="18"
          cy="18"
          r="16.5"
          fill="none"
          stroke="#568C20"
          strokeWidth="3"
          strokeDasharray={progress}
          strokeLinecap="round"
          transform="rotate(-90 18 18)"
        />
      </svg>

      <div className="flex items-center justify-center w-full h-full relative z-10">
        {icon}
      </div>
    </div>
    <AnimatedCounter value={value} numericValue={numericValue} />
    <p className="text-[#555555] text-center">{label}</p>
  </div>
);

const StatsSection = () => {
  return (
    <div className="flex flex-col items-center pt-14 max-w-screen-xl mx-auto">
      <h2 className="font-[playfair] text-4xl font-bold text-gray-900">
        Our Reach in Numbers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 container mt-5 mx-auto">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;