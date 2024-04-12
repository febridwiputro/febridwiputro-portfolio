// ProjectCard.tsx
import React from "react";

import { getImageUrl } from "../../utils";

interface Project {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  demo: string;
  source: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, imageSrc, description, skills, demo, source } = project;
  
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-blue-600 to-blue-900 rounded-lg shadow-xl p-6 max-w-md">
      <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className="w-full mb-6" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-lg mt-2">{description}</p>
      <ul className="flex flex-wrap mt-4">
        {skills.map((skill, id) => (
          <li key={id} className="text-lg font-medium bg-blue-800 text-white rounded-full px-4 py-1 mr-2 mb-2">{skill}</li>
        ))}
      </ul>
      <div className="flex justify-around w-full mt-6">
        <a href={demo} className="text-lg font-semibold text-white bg-blue-600 rounded-full px-6 py-2 hover:bg-blue-700 transition duration-300">Demo</a>
        <a href={source} className="text-lg font-semibold text-white bg-blue-600 rounded-full px-6 py-2 hover:bg-blue-700 transition duration-300">Source</a>
      </div>
    </div>
  );
};
