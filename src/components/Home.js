import React from "react";
import ProjectCard from "./ProjectCard";
import "../index.css";
import { Link, Outlet } from "react-router-dom";

function Home({ projects, updateScreen }) {
  const textColor = {
    color: "white",
  };

  return (
    <div>
      <h1>Open Project Status</h1>

      <div>
        <Link to="all" className="projects-nav">
          All
        </Link>
        <Link to="planning" className="projects-nav">
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
