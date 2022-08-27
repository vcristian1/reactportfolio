import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import components
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import Projectspage from './components/Projectspage'
import Skillspage from "./components/Skillspage";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/projects" element={<Projectspage />} />
          <Route path="/resume" element={<Skillspage />} />
        </Routes>
    </div>
  );
}

export default App;