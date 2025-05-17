import React from 'react';
import {images} from "../components/about/images/images.js"
import HeroSection from "../components/about/HeroSection.jsx";
import Description from "../components/about/Description.jsx";
import StatsSection from "../components/home/StatsSection.jsx";


const About = () => {
    return (
        <div className="min-h-screen">
            <HeroSection/>
            <section className="relative w-full">
                <img src={images.top} className="w-full absolute -z-10" alt="Top decoration"/>
                <div className='py-20 md:py-32'>
                   <Description/>
                </div>
                <StatsSection/>
                <img src={images.bottom} className="w-full absolute bottom-100" alt="Bottom decoration"/>
            </section>
        </div>
    );
};

export default About;
