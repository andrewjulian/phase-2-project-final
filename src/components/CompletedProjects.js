import React from "react";
import ProjectCard from "./ProjectCard";

function CompletedProjects({ projects }) {
  const filteredProjectsComplete = projects.filter(
    (project) => project.complete === true
  );

  const projectsDisplayedComplete = filteredProjectsComplete.map(
    (project, id) => {
      return <ProjectCard projects={project} key={id} />;
    }
  );

  return (
    <div>
      <h1>Completed Projects</h1>
      {projectsDisplayedComplete}
    </div>
  );
  //will be a filter that shows only project cards with "complete" data as true
}

export default CompletedProjects;
