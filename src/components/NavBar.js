import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/newproject">NewProject</NavLink>
      <NavLink to="/completed">Completed Projects</NavLink>
    </div>
  );
}

export default NavBar;
