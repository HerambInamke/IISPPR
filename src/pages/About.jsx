import React from 'react';
import { motion } from 'framer-motion';
import { images } from "../components/about/images.js"
import HeroSection from "../components/about/HeroSection.jsx";
import Description from "../components/about/Description.jsx";
import StatsSection from "../components/about/StatsSection.jsx";
import GalleryCarousel from "../components/about/Gallery.jsx";

const fadeInUpVariant = {
    initial: {
        y: 60,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const About = () => {
    return (
        <div className="min-h-screen">
            <HeroSection/>
            <section className="relative w-full">
                <img src={images.top} className="w-full absolute -z-10" alt="Top decoration"/>

                <motion.div
                    className='pt-20 md:pt-32 md:mb-15 lg:mb-28'
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUpVariant}
                >
                    <Description/>
                </motion.div>

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUpVariant}
                >
                    <StatsSection/>
                </motion.div>

                <motion.div
                    className="pt-40"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUpVariant}
                >
                    <GalleryCarousel/>
                </motion.div>

                <img src={images.bottom} className="w-full absolute bottom-100 -z-10" alt="Bottom decoration"/>
            </section>
        </div>
    );
};

export default About;