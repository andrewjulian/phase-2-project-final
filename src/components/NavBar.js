import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    background: "lightblue",
    textDecoration: "none",
    color: "black",
    textAlign: "center",
  };

  return (
    <div>
      <NavLink to="/" style={linkStyles}>
        Home
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
