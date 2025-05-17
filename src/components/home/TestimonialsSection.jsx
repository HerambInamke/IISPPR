import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Slider from '../ui/Slider';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Community Volunteer',
      image: '/src/assets/about/testimonials/testimonial1.jpg',
      quote: "Being part of Prakriti's initiatives has been incredibly rewarding. The impact we've made in our community is truly inspiring."
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Environmental Scientist',
      image: '/src/assets/about/testimonials/testimonial2.jpg',
      quote: "The scientific approach and dedication to environmental conservation shown by Prakriti is exemplary. Their work is making a real difference."
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Local Resident',
      image: '/src/assets/about/testimonials/testimonial3.jpg',
      quote: "The community gardens project has transformed our neighborhood. We're now growing our own food and learning sustainable practices."
    }
  ];

  const testimonialSlides = testimonials.map(testimonial => (
    <div key={testimonial.id} className="p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.role}</p>
          </div>
        </div>
        <blockquote className="text-gray-700 text-lg italic">
          "{testimonial.quote}"
        </blockquote>
      </div>
    </div>
  ));

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our volunteers, partners, and community members about their experiences with Prakriti.
          </p>
        </div>

        <div className="mb-12">
          <Slider
            slides={testimonialSlides}
            autoPlay={true}
            interval={5000}
          />
        </div>

        <div className="text-center">
          <Button
            as={Link}
            to="/testimonials"
            variant="outline"
            size="lg"
          >
            Read More Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 