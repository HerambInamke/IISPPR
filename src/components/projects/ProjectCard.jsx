import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';

const ProjectCard = ({ project }) => {
  const { id, title, description, image, category, location } = project;

  return (
      <Card hover className="h-full">
        <div className="flex flex-col h-full">
          {/* Image Container */}
          <div className="relative aspect-w-16 aspect-h-9 mb-4">
            <img
                src={image}
                alt={title}
                className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary text-white rounded-full">
              {category}
            </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex items-center text-gray-500 mb-4">
              <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{location}</span>
            </div>
          </div>

          {/* Action Button */}
          <Link
              to={`/projects/${id}`}
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            Learn More
            <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </Card>
  );
};

export default ProjectCard;