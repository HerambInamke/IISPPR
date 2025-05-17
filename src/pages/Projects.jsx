import React, { useState } from 'react';
import ProjectsList from '../components/projects/ProjectsList';

const categories = [
    'All',
    'Education',
    'Agriculture',
    'Water',
    'Energy',
    'Innovation',
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <div className="bg-[#222] min-h-screen flex flex-col">
            {/* Hero Section */}
            <div className="relative w-full h-[320px] md:h-[400px] lg:h-[480px] flex items-end justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                    alt="Projects Hero"
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10" />
                <div className="relative z-20 w-full max-w-5xl px-6 py-10 flex flex-col md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg font-serif">Projects</h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-xl drop-shadow font-light">
                            Explore our diverse range of impactful projects, from education and agriculture to water, energy, and innovation. Each initiative is designed to foster sustainable development and empower communities.
                        </p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 mt-6 md:mt-0 md:ml-8 max-w-xs shadow-lg border border-white/30">
                        <h2 className="text-xl font-semibold text-white mb-2">Our Mission</h2>
                        <p className="text-white/90 text-sm mb-2">
                            To create lasting positive change by supporting projects that nurture people and the planet.
                        </p>
                        <a href="#learn-more" className="text-lime-300 font-medium underline">Learn More →</a>
                    </div>
                </div>
            </div>

            {/* Filter Buttons */}
            <div className="bg-[#f4f4f4] py-6 flex justify-center border-b border-gray-200">
                <div className="flex flex-wrap gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 shadow-sm focus:outline-none ${
                                selectedCategory === cat
                                    ? 'bg-[#3d4d2b] text-white'
                                    : 'bg-[#e3e8dd] text-[#3d4d2b] hover:bg-[#cdd7c0]'
                            }`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="flex-1 bg-[#f4f4f4] pb-0">
                <div className="max-w-6xl mx-auto px-4">
                    <ProjectsList selectedCategory={selectedCategory} />
                </div>
            </div>

            {/* Wavy Divider */}
            <div className="relative w-full overflow-hidden" style={{height:'80px', marginTop:'-40px'}}>
                <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#3d4d2b" d="M0,0 C480,80 960,0 1440,80 L1440,80 L0,80 Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Projects;