import React from "react";

function Creating({ projects }) {
  const filteredProjectsCreating = projects.filter(
    (project) => project.status === "Creating"
  );

  return (
    <div>
      <h2>Creating</h2>
      {filteredProjectsCreating}
    </div>
  );
}

export default Creating;
