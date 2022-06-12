import React from "react";

function NeedsReview({ projects }) {
  const filteredProjectsNeedsReview = projects.filter(
    (project) => project.status === "Needs Review"
  );

  return (
    <div>
      <h2>Needs Review</h2>
      {filteredProjectsNeedsReview}
    </div>
  );
}

export default NeedsReview;
