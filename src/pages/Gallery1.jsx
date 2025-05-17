import React from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery1 = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Forest Conservation',
      image: '/src/assets/about/gallery/gallery1.jpg',
      category: 'Nature',
      description: 'Our forest conservation efforts in action'
    },
    {
      id: 2,
      title: 'Community Workshop',
      image: '/src/assets/about/gallery/gallery2.jpg',
      category: 'Community',
      description: 'Engaging with local communities'
    },
    {
      id: 3,
      title: 'Wildlife Sanctuary',
      image: '/src/assets/about/gallery/gallery3.jpg',
      category: 'Wildlife',
      description: 'Protecting endangered species'
    },
    {
      id: 4,
      title: 'Tree Planting',
      image: '/src/assets/about/gallery/gallery4.jpg',
      category: 'Conservation',
      description: 'Our reforestation initiatives'
    },
    {
      id: 5,
      title: 'Environmental Education',
      image: '/src/assets/about/gallery/gallery5.jpg',
      category: 'Education',
      description: 'Teaching sustainable practices'
    },
    {
      id: 6,
      title: 'Clean Energy',
      image: '/src/assets/about/gallery/gallery6.jpg',
      category: 'Energy',
      description: 'Promoting renewable energy solutions'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Explore our visual journey through environmental conservation and community development initiatives.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </div>
  );
};

export default Gallery1;
