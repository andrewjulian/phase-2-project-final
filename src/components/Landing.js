import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <button>
        <NavLink to="/projects">Projects</NavLink>
        Enter!
      </button>
    </div>
  );
};

export default Landing;
