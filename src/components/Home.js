import React from "react";
import ProjectCard from "./ProjectCard";
import "../index.css";
import { Link, Outlet } from "react-router-dom";

function Home({ projects, updateScreen }) {
  const textColor = {
    color: "white",
  };
  const filteredProjectsIncomplete = projects.filter(
    (project) => project.complete === false
  );

  //creates small card with just
  const projectsDisplayedIncomplete = filteredProjectsIncomplete.map(
    (project, id) => {
      return (
        <ProjectCard projects={project} key={id} updateScreen={updateScreen} />
      );
    }
  );

  return (
    <div>
      <h1>Open Projects</h1>

      <div>
        <Link to="/projects/planning" className="projects-nav">
          Planning
        </Link>
        <Link to="creating" className="projects-nav">
          Creating
        </Link>
        <Link to="review" className="projects-nav">
          Needs Review
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Home;

// will be a filter feature that populates projects with compeleted as false
// cards sorted into "status" columns
// ideally a drag and drop option
