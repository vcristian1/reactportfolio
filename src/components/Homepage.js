import React from "react";
import AboutCard from "./AboutCard";
import Header from "./Header"
import Layout from "./layout";


function Homepage() {
    
    return (
        <div>
            <Layout>
                <Header />
                <AboutCard />
            </Layout>
        </div>
    );
}

export default Homepage;
