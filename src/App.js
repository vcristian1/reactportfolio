import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//Import components
import Homepage from './components/Homepage';
import Projectspage from './components/Projectspage'
import Skillspage from "./components/Skillspage";
import Contactpage from "./components/Contactpage";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projectspage />} />
          <Route path="/resume" element={<Skillspage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;