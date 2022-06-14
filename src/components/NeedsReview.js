import React from "react";
import ProjectCard from "./ProjectCard";

function NeedsReview({ projects, updateScreen }) {
  const filteredProjectsNeedsReview = projects.filter(
    (project) => project.status === "Needs Review"
  );

  const projectsDisplayedReview = filteredProjectsNeedsReview.map(
    (project, id) => {
      return (
        <ProjectCard projects={project} key={id} updateScreen={updateScreen} />
      );
    }
  );

  return (
    <div>
      <h2>Needs Review</h2>
      {projectsDisplayedReview}
    </div>
  );
}

export default NeedsReview;
