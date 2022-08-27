import React from "react";

function Header () {
    return (
        <div class="transform-container sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight  sm:text-5xl md:text-6xl">Hello, Im 
                <span class="block text-green-400 xl:inline">Cristian</span>
            </h1>

            <h1 class="tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-3xl">
                <span class="block text-indigo-600 xl:inline"></span>
            </h1> 
            <p class="mt-3 font-thin text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">I am a Full Stack Engineer and content creator focused on creating dynamic web applications using a variety of languages, technologies, and frameworks.</p>                    
        </div>
    )
}

export default Header;