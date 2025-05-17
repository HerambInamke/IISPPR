import React from 'react';
import Card from '../ui/Card';

const Impact = () => {
  const impactAreas = [
    {
      title: 'Environmental Conservation',
      description: 'Protecting and restoring natural ecosystems through sustainable practices.',
      icon: '🌱'
    },
    {
      title: 'Community Development',
      description: 'Empowering local communities with resources and education for sustainable living.',
      icon: '👥'
    },
    {
      title: 'Education & Awareness',
      description: 'Spreading knowledge about environmental conservation and sustainable practices.',
      icon: '📚'
    },
    {
      title: 'Research & Innovation',
      description: 'Developing new solutions for environmental challenges through research.',
      icon: '🔬'
    }
  ];

  return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
                <Card key={index} hover className="p-6 text-center">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Impact; 