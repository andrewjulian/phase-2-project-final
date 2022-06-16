import React, { useState } from "react";
import "../index.css";

function ProjectCard({ projects, updateScreen }) {
  const { id, title, category, description, status, complete } = projects;

  const [checked, setChecked] = useState(complete);

  function handleChecked() {
    const newState = checked ? false : true;
    setChecked(newState);

    fetch(`http://localhost:3000/projects/${projects.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete: newState,
      }),
    })
      .then((r) => r.json())
      .then((data) => updateScreen(data));

    setChecked(complete);
  }

  function handleCategoryChange(event) {
    const newCategory = event.target.value;

    fetch(`http://localhost:3000/projects/${projects.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: newCategory,
      }),
    })
      .then((r) => r.json())
      .then((data) => updateScreen(data));
  }

  return (
    <div id={id} className="projectCardStyle">
      <h2>{title}</h2>
      <h3>Category: {category}</h3>
      <select
        name="category"
        id="category"
        value={status}
        onChange={handleCategoryChange}
      >
        <option value="Planning">Planning</option>
        <option value="Creating">Creating</option>
        <option value="Needs Review">Needs Review</option>
      </select>
      <p>Description: {description}</p>
      <input
        type="checkbox"
        id={id}
        onChange={handleChecked}
        checked={checked}
      ></input>
      <label htmlFor={id}> Complete </label>
    </div>
  );
}

export default ProjectCard;

// used to display project information (completed and non-completed)
