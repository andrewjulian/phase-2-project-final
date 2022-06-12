import React from "react";

function Planning({ projects }) {
  const filteredProjectsPlanning = projects.filter(
    (project) => project.status === "Planning"
  );

  return (
    <div>
      <h2>Planning</h2>
      {filteredProjectsPlanning}
    </div>
  );
}

export default Planning;
