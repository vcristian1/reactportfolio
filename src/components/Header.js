import React from "react";
import ExampleComponent from "./headerTypingComponent";

function Header () {
    return (
        
        <div className="mr-10 transform-container lg:ml-14 lg:text-left">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-14 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <p><ExampleComponent /></p>
                {/* <h1 className="text-4xl tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">Hello, Im  
                    <span className="mt-2 block text-green-400 sm:text-5xl md:text-5xl lg:text-6xl"> Cristian Vargas.</span>
                </h1>
                <h1 className="mt-2 opacity-70 tracking-tight text-green-400 sm:text-5xl md:text-5xl lg-text-6xl"> 
                    <span className="block text-green-400 xl:inline text-4xl sm:text-5xl md:text-5xl lg:text-6xl"> Nice</span>
                    <span className="opacity-70	block text-black text-4xl xl:inline sm:text-5xl md:text-5xl lg:text-6xl"> to meet you!</span>
                </h1>*/}

                <p className="md:ml-16 mt-6 font-thin text-1xl text-gray-500 sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-10 md:text-2xl lg:text-3xl lg:mx-0">I am a Front-End Software Engineer and content creator focused on creating dynamic web applications using a variety of javascript based technologies, and frameworks.</p>         
            </div>            
        </div>
        
    )
}

export default Header;