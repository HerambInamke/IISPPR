import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../projects/ProjectCard';
import Button from '../ui/Button';

const ProjectsHighlight = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Forest Conservation',
      description: 'Protecting and restoring native forest ecosystems through sustainable practices.',
      image: '/src/assets/about/projects/forest.jpg',
      category: 'Conservation',
      location: 'Western Ghats'
    },
    {
      id: 2,
      title: 'Community Garden',
      description: 'Creating sustainable urban gardens to promote local food production.',
      image: '/src/assets/about/projects/garden.jpg',
      category: 'Community',
      location: 'Urban Centers'
    },
    {
      id: 3,
      title: 'Wildlife Protection',
      description: 'Safeguarding endangered species and their natural habitats.',
      image: '/src/assets/about/projects/wildlife.jpg',
      category: 'Wildlife',
      location: 'National Parks'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most impactful initiatives that are making a difference in environmental conservation and community development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Button
            as={Link}
            to="/projects"
            variant="outline"
            size="lg"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHighlight; 