import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      number: '50+',
      label: 'Projects Completed',
      description: 'Successfully implemented environmental and community projects'
    },
    {
      id: 2,
      number: '1000+',
      label: 'Trees Planted',
      description: 'Contributing to reforestation and carbon offset'
    },
    {
      id: 3,
      number: '25+',
      label: 'Communities Served',
      description: 'Empowering local communities through sustainable development'
    },
    {
      id: 4,
      number: '10000+',
      label: 'Volunteers',
      description: 'Dedicated individuals working towards environmental conservation'
    }
  ];

  return (
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We measure our success not just in numbers, but in the positive change we bring to communities and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(stat => (
                <div key={stat.id} className="text-center">
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                  <p className="text-white/80">{stat.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default StatsSection; 