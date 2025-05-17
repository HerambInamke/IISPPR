import React from "react";
import { Handshake, Users, Heart, Globe } from "lucide-react";

const stats = [
  {
    icon: <Handshake className="w-20 h-20 text-[#568C20]" />,
    value: "4597+",
    label: "People Rised",
    progress: "75 25",
  },
  {
    icon: <Users className="w-20 h-20 text-[#568C20]" />,
    value: "8945+",
    label: "Volunteer",
    progress: "80 20",
  },
  {
    icon: <Heart className="w-20 h-20 text-[#568C20]" />,
    value: "10M+",
    label: "Poor People Saved",
    progress: "85 15",
  },
  {
    icon: <Globe className="w-20 h-20 text-[#568C20]" />,
    value: "100+",
    label: "Country Member",
    progress: "50 50",
  },
];

const StatCard = ({ icon, value, label, progress }) => (
  <div className="bg-[#4D932426] flex flex-col items-center justify-center p-6 w-full pb-10">
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
    <h3 className="text-4xl font-bold text-black m-5">{value}</h3>
    <p className="text-[#555555]">{label}</p>
  </div>
);

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 container mt-10 mx-auto">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsSection;
