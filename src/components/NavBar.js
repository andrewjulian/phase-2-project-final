import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "10px 6px 6px",
    background: "lightblue",
    textDecoration: "none",
    color: "black",
    textAlign: "center",
    borderRadius: "10px",
  };

  return (
    <div>
      <NavLink to="/projects" style={linkStyles}>
        Projects
      </NavLink>
      <NavLink to="/newproject" style={linkStyles}>
        New Project
      </NavLink>
      <NavLink to="/completed" style={linkStyles}>
        Completed
      </NavLink>
    </div>
  );
}

export default NavBar;
