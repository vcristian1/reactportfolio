import React from "react";

import Navbar from './components/Navbar'
import AboutCard from "./components/AboutCard";
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      < Navbar></Navbar>
      < Header></Header>
      < AboutCard></AboutCard>
    </div>
  );
}

export default App;
