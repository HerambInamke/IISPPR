import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      image: '/src/assets/images/gallery/gallery1.jpg',
      title: 'Forest Conservation',
      category: 'Nature'
    },
    {
      id: 2,
      image: '/src/assets/images/gallery/gallery2.jpg',
      title: 'Community Workshop',
      category: 'Community'
    },
    {
      id: 3,
      image: '/src/assets/images/gallery/gallery3.jpg',
      title: 'Wildlife Sanctuary',
      category: 'Wildlife'
    },
    {
      id: 4,
      image: '/src/assets/images/gallery/gallery4.jpg',
      title: 'Tree Planting',
      category: 'Conservation'
    }
  ];

  return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a visual journey through our impactful work and the beautiful moments we've captured.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {galleryImages.map(item => (
                <div key={item.id} className="relative group overflow-hidden rounded-lg">
                  <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          <div className="text-center">
            <Button
                as={Link}
                to="/gallery1"
                variant="outline"
                size="lg"
            >
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>
  );
};

export default Gallery; 