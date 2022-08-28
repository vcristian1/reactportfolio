import React from "react";
import cvLogo from '../images/cvlogo.png';

function Footer(){
    return (
        <div>
            <footer className="p-4 bg-white rounded-lg shadow sm:flex sm:items-center sm:justify-between sm:p-6 dark:bg-gray-800">
                <div>
                    {/* <img className="mb-3 ml-4 h-10 w-15" src={cvLogo} alt="logo"/> */}
                </div>
                <span className="font-thin text-1xl text-gray-500 sm:text-left dark:text-gray-400">© 2022 <a href="#about" className="hover:text-green-400">Cristian Vargas™</a>. All Rights Reserved.
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