// Projects.tsx
import React from "react";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  return (
    <section className="container mx-auto mt-12" id="projects">
      <h2 className="text-white text-5xl font-bold uppercase">PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
