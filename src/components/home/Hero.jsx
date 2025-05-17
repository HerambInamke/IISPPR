import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/src/assets/images/hero/hero-bg.jpg')" }}
            />

            <div className="container mx-auto px-4 relative z-20 text-white">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Empowering Communities Through Nature
                    </h1>
                    <p className="text-xl mb-8">
                        Join us in our mission to create sustainable communities and preserve our natural heritage for future generations.
                    </p>
                    <div className="flex space-x-4">
                        <Button size="lg" as={Link} to="/projects">
                            Our Projects
                        </Button>
                        <Button size="lg" variant="outline" as={Link} to="/contact">
                            Get Involved
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;