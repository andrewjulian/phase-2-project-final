import React from "react";

function Landing() {
  return (
    <div>
      <div className="landingMain">
        <h1>Project Management Tool</h1>
        <p>
          This project is designed to help an individual keep track of the
          project progress.Each of the pages of the app can be used to create
          new projects, track the progress of uncompleted projects, and catalog
          completed projects.
        </p>
      </div>

      <div className="landing">
        <h3>Projects</h3>
        <p>
          The projects page stores all of the uncompleted projects. You can sort
          the projects based on their status of completion, as well as change
          the status and mark the project as done.
        </p>
      </div>

      <div className="landing">
        <h3>New Project</h3>
        <p>
          The form on the New Project page will add a new project to the
          Projects Page.
        </p>
      </div>

      <div className="landing">
        <h3>Completed</h3>
        <p>
          The completed projects page catalogs all of the completed projects.
        </p>
      </div>
    </div>
  );
}

export default Landing;
