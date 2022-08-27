import React from "react";

function Footer(){
    return (
        <div>
            <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <div>
                    {/* <img className="mb-3 ml-4 h-10 w-15" src="./assets/cvlogo.png" alt=""> */}
                </div>
                <span className="font-thin text-1xl text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#about" className="hover:text-green-400">Cristian Vargas™</a>. All Rights Reserved.
                </span>
                <ul className="font-thin flex flex-wrap items-center mt-3 text-1xl text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#about" className="mr-4 hover:text-green-400 md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="https://opensource.org/licenses/MIT" className="mr-4 hover:text-green-400 md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="mailto:cristian.v0223@gmail.com" className="hover:text-green-400">Contact</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;