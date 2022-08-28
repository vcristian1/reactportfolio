import React from "react";
import { Routes, Route } from "react-router-dom";

//Import components
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import Projectspage from './components/Projectspage'
import Skillspage from "./components/Skillspage";
import Contactpage from "./components/Contactpage";


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/reactportfolio" element={<Homepage />} />
          <Route path="/reactportfolio/projects" element={<Projectspage />} />
          <Route path="/reactportfolio/resume" element={<Skillspage />} />
          <Route path="/reactportfolio/contact" element={<Contactpage />} />
        </Routes>
    </div>
  );
}

export default App;