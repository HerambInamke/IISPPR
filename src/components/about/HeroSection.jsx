import React from 'react';
import {images} from "./images.js";
import MissionCard from "./MissionCard.jsx";

const FrostedTextBgOutline = ({text}) => {
    return (
        <div
            className="frosted-container px-4 sm:px-6 lg:px-9 py-2 sm:py-3 lg:py-4 bg-white/10 rounded-full backdrop-blur-md inline-flex justify-start items-start gap-2.5 text-white"
            style={{
                border: '1px solid rgba(255, 255, 255, 1)',
            }}
        >
            <p className="font-[montserrat] text-base sm:text-xl lg:text-2xl font-normal">
                {text}
            </p>
        </div>
    )
}

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${images.hero})`,
                    filter: 'brightness(0.4)'
                }}
            />
            {/* Content */}
            <div className="relative z-10 px-4 sm:px-[3%] py-[3%] h-full flex flex-col justify-between">
                <div>
                    <h1 className="font-[playfair] font-medium text-6xl md:text-8xl lg:text-9xl text-white mb-4 mt-14">About
                        Us</h1>
                    <FrostedTextBgOutline text="Who Are We?"/>
                    <p className="py-5 w-full md:w-[70%] lg:w-[50%] text-sm sm:text-base lg:text-xl text-white font-normal font-[montserrat]">IISPPR is a New Delhi-based nonprofit think tank driving sustainable development through research-driven, practical policy solutions.</p>
                </div>
                <div className="flex justify-center sm:justify-end">
                    <MissionCard learn_more={false}/>
                </div>
            </div>
        </section>
    );

}

export default HeroSection;