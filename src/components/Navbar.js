import React from 'react'
import { useState } from 'react'

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        
        <div className="ml-4 relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                {/* <!--
                    Mobile menu, show/hide based on menu open state.
                --> */}
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <div>
                            {/* <img className="h-10 w-15" src="./assets/cvlogo.png" alt=""> */}
                        </div>
                    </div>
                </div>

                <div id="mobile-menu" className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu hidden md:block md:ml-10 md:pr-4"}>  
                    <a href="/about" className="font-thin text-2xl text-gray-500 hover:text-green-400 transition relative pt-4 px-1 sm:text-1xl">About</a>
                    
                    <a href="/projects" className="font-thin text-2xl text-gray-500 hover:text-green-400 transition relative pt-4 px-1 sm:text-1xl">Projects</a>
                      
                    <a href="/resume" className="font-thin text-2xl text-gray-500 hover:text-green-400 transition relative pt-4 px-1 sm:text-1xl">Resume</a>
                       
                    <a href="/contact" className="font-thin text-2xl text-gray-500 hover:text-green-400 transition relative pt-4 px-1 sm:text-1xl">Contact</a>
                </div>

                <div id="mobile_burger" className="-mr-2 flex items-center md:hidden">
                    <button 
                        type="button" 
                        className="hamburger bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400" 
                        aria-expanded="false"
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                          }}
                        >
                        <span className="sr-only">Open main menu</span>
                        {/* <!-- Heroicon name: outline/menu --> */}
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;