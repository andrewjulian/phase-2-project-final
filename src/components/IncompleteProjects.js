import React from "react";
import ProjectCard from "./ProjectCard";

const IncompleteProjects = ({ projects, updateScreen }) => {
  const incompleteProjects = projects.filter(
    (project) => project.complete === false
  );

  const incompleteProjectsDisplay = incompleteProjects.map((project, id) => {
    return (
      <ProjectCard projects={project} key={id} updateScreen={updateScreen} />
    );
  });

  return (
    <div>
      <h2>Creating</h2>
      {incompleteProjectsDisplay}
    </div>
  );
};

export default IncompleteProjects;
