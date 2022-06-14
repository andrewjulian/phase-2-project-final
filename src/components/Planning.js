import React from "react";
import ProjectCard from "./ProjectCard";

function Planning({ projects, updateScreen }) {
  const filteredProjectsPlanning = projects.filter(
    (project) => project.status === "Planning" && project.complete == false
  );

  const projectsDisplayedPlanning = filteredProjectsPlanning.map(
    (project, id) => {
      return (
        <ProjectCard projects={project} key={id} updateScreen={updateScreen} />
      );
    }
  );

  return (
    <div>
      <h2>Planning</h2>
      {projectsDisplayedPlanning}
    </div>
  );
}

export default Planning;
