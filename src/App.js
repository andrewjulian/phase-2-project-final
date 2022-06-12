import "./App.css";
import "./index.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NewProject from "./components/NewProject";
import CompletedProjects from "./components/CompletedProjects";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Planning from "./components/Planning";
import Creating from "./components/Creating";
import NeedsReview from "./components/NeedsReview";
import Landing from "./components/Landing";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  function updateScreen(updatedProject) {
    const updatedProjects = projects.map((project) => {
      if (project.id === updatedProject.id) {
        return updatedProject;
      } else {
        return project;
      }
    });
    setProjects(updatedProjects);
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={Landing} />
        <Route
          path="/projects/*"
          element={<Home projects={projects} updateScreen={updateScreen} />}
        >
          <Route path="planning" element={<Planning projects={projects} />} />
          <Route path="creating" element={<Creating projects={projects} />} />
          <Route path="review" element={<NeedsReview projects={projects} />} />
        </Route>
        <Route path="/newproject" element={<NewProject />} />
        <Route
          path="/completed"
          element={
            <CompletedProjects
              projects={projects}
              updateScreen={updateScreen}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
