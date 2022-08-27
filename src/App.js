import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import Projectspage from './components/Projectspage'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="" element={<Homepage />} />
          <Route path="" element={<Homepage />} />
          <Route path="" element={<Homepage />} />
        </Routes>
    </div>
  );
}

export default App;
