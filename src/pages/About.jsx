import React from 'react';
import {images} from "../../public/about/images.js"
import HeroSection from "../components/about/HeroSection.jsx";
import Description from "../components/about/Description.jsx";
import StatsSection from "../components/about/StatsSection.jsx";
import GalleryCarousel from "../components/about/Gallery.jsx";


const About = () => {
    return (
        <div className="min-h-screen">
            <HeroSection/>
            <section className="relative w-full">
                <img src={images.top} className="w-full absolute -z-10" alt="Top decoration"/>
                <div className='pt-20 md:pt-32 md:mb-15 lg:mb-28'>
                   <Description/>
                </div>
                <StatsSection/>
                <div className="pt-40">
                    <GalleryCarousel/>
                </div>

                <img src={images.bottom} className="w-full absolute bottom-100" alt="Bottom decoration"/>
            </section>
        </div>
    );
};

export default About;
