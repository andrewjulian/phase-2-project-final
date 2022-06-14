import React from "react";
import ProjectCard from "./ProjectCard";

function Creating({ projects, updateScreen }) {
  const filteredProjectsCreating = projects.filter(
    (project) => project.status === "Creating"
  );

  const projectsDisplayedCreating = filteredProjectsCreating.map(
    (project, id) => {
      return (
        <ProjectCard projects={project} key={id} updateScreen={updateScreen} />
      );
    }
  );

  return (
    <div>
      <h2>Creating</h2>
      {projectsDisplayedCreating}
    </div>
  );
}

export default Creating;
