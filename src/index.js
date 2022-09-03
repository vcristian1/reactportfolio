import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


//Import components
import Homepage from './components/Homepage';
import Projectspage from './components/Projectspage'
import Skillspage from "./components/Skillspage";
import Contactpage from "./components/Contactpage";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="projects" element={<Projectspage />} />
      <Route path="resume" element={<Skillspage />} />
      <Route path="contact" element={<Contactpage />} />
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById("root")
);