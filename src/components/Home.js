import React from "react";
import ProjectCard from "./ProjectCard";
import "../index.css";

function Home({ projects, updateScreen }) {
  const textColor = {
    color: "white",
  };
  const filteredProjectsIncomplete = projects.filter(
    (project) => project.complete === false
  );

  const projectsDisplayedIncomplete = filteredProjectsIncomplete.map(
    (project, id) => {
      return (
        <div key={id} className="projectCardStyle">
          <h3 style={textColor}>{project.title}</h3>
          <button>See More</button>
        </div>
      );
    }
  );

  return (
    <div>
      <h1>Open Projects</h1>
      {projectsDisplayedIncomplete}
    </div>
  );
}

export default Home;

// will be a filter feature that populates projects with compeleted as false
// cards sorted into "status" columns
// ideally a drag and drop option
