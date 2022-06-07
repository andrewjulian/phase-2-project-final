import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NewProject from "./components/NewProject";
import CompletedProjects from "./components/CompletedProjects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/newproject" element={<NewProject />} />
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<CompletedProjects />} />
      </Routes>
    </div>
  );
}

export default App;
