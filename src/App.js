import "./App.css";
import "./index.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NewProject from "./components/NewProject";
import CompletedProjects from "./components/CompletedProjects";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

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
        <Route
          exact
          path="/"
          element={<Home projects={projects} updateScreen={updateScreen} />}
        />
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
