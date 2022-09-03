import React from "react";
import AboutCard from "./AboutCard";
import Footer from "./Footer";
import Header from "./Header"
import Navbar from "./Navbar";

function Homepage() {
    
    return (
        <div>
            <Navbar />
            <Header />
            <AboutCard />
            <Footer />
        </div>
    );
}

export default Homepage;
