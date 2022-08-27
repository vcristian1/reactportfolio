import React from 'react'
import getHigher from '../images/gethigher.png'
import employeeTracker from '../images/employee-tracker.png'
import noteTaker from '../images/notetaker.png'
import techBlog from '../images/techblog.png'
import weather from '../images/weather.png'

// In Navbar, we can assign a style from an object by using curly braces
function Projects() {
    
    return (
        <div className="p-0 bg-white">
            <div className="container md:ml-20 lg:ml-20 md:mr-20 lg:mr-20 md:mb-20 lg:mb-20 md:p-20 lg:p-20 lg:-mt-14">
            <h2 className="text-center mt-5 ml-2 mb-10 lg:mt-24 tracking-tight text-4xl">Projects</h2>
            <p className="m-4 font-thin mt-10 mb-10 md:text-2xl sm:text-1xl text-gray-500">Check out my most recent projects! To deploy any project, be sure to click on the project name. To view the repository, click on View Repository.</p>
                <div className="flex flex-wrap sm:-mr-20">
                    <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                        <div className="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                            src={weather}
                            alt="project"
                            className="w-full"
                            />
                            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                                <a
                                    href="https://vcristian1.github.io/get-weather-api/"
                                    className="
                                    font-semibold
                                    text-dark text-xl
                                    sm:text-[22px]
                                    md:text-xl
                                    lg:text-[22px]
                                    xl:text-xl
                                    2xl:text-[22px]
                                    mb-4
                                    block
                                    hover:text-green-400
                                    transition
                                    "
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                Weather Application
                                </a>
                            </h3>
                            <p className="text-base font-thin text-body-color leading-relaxed mb-7">
                                A Weather Application powered by the Open Weather API. Open Weather API is used to pull the live weather outlook for the city you are currently located in, so users can plan accordingly before going outside.
                            </p>
                            <a
                                href="https://github.com/vcristian1/get-weather-api"
                                className="
                                inline-block
                                py-2
                                px-7
                                border border-[#E5E7EB]
                                rounded-full
                                text-base text-body-color
                                font-medium
                                hover:border-primary hover:bg-primary hover:text-green-400
                                transition
                                "
                                target="_blank"
                                rel="noreferrer"
                                >
                            View Repository
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                        <div className="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                            src={getHigher}
                            alt="project"
                            className="w-full"
                            />
                            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                                <a
                                    href="https://get-higher.herokuapp.com"
                                    className="
                                    font-semibold
                                    text-dark text-xl
                                    sm:text-[22px]
                                    md:text-xl
                                    lg:text-[22px]
                                    xl:text-xl
                                    2xl:text-[22px]
                                    mb-4
                                    block
                                    hover:text-green-400
                                    transition
                                    "
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                Get Higher
                                </a>
                            </h3>
                            <p className="text-base font-thin text-body-color leading-relaxed mb-7">
                                A Full Stack Web Application that functions as the all in one place to find the career field that fits best for you, and the jobs that are available right now. Complete our Career Match Quiz to see which field you may fit best in based on your personality.
                            </p>
                            <a
                                href="https://github.com/vcristian1/GetHigher"
                                className="
                                inline-block
                                py-2
                                px-7
                                border border-[#E5E7EB]
                                rounded-full
                                text-base text-body-color
                                font-medium
                                hover:border-primary hover:bg-primary hover:text-green-400
                                transition
                                "
                                target="_blank"
                                rel="noreferrer"
                                >
                            View Repository
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                        <div className="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                            src={techBlog}
                            alt="project"
                            className="w-full"
                            />
                            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <h3>
                                    <a
                                        href="https://immense-mesa-39928.herokuapp.com/"
                                        className="
                                        font-semibold
                                        text-dark text-xl
                                        sm:text-[22px]
                                        md:text-xl
                                        lg:text-[22px]
                                        xl:text-xl
                                        2xl:text-[22px]
                                        mb-4
                                        block
                                        hover:text-green-400
                                        transition
                                        "
                                        target="_blank"
                                        rel="noreferrer"
                                        >
                                    Technology Blog
                                    </a>
                                </h3>
                                <p className="text-base font-thin text-body-color leading-relaxed mb-7">
                                    A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.
                                </p>
                                <a
                                    href="https://github.com/vcristian1/mvc-techblog-demo"
                                    className="
                                    inline-block
                                    py-2
                                    px-7
                                    border border-[#E5E7EB]
                                    rounded-full
                                    text-base text-body-color
                                    font-medium
                                    hover:border-primary hover:bg-primary hover:text-green-400
                                    transition
                                    "
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                View Repository
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                        <div className="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                            src={employeeTracker}
                            alt="project"
                            className="w-full ml-4"
                            />
                            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                                <a
                                    href="https://drive.google.com/file/d/1eeJ1vqruyNjNho3A7iGV1cNJHj9NbOXI/view"
                                    className="
                                    font-semibold
                                    text-dark text-xl
                                    sm:text-[22px]
                                    md:text-xl
                                    lg:text-[22px]
                                    xl:text-xl
                                    2xl:text-[22px]
                                    mb-4
                                    block
                                    hover:text-green-400
                                    transition
                                    "
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                Employee Tracker CLI
                                </a>
                            </h3>
                            <p className="text-base font-thin text-body-color leading-relaxed mb-7">
                                A Command Line Interface Application which manages a company's employee database, using Node.js, Inquirer, and MySQL.
                            </p>
                            <a
                                href="https://github.com/vcristian1/employee-tracker-demo"
                                className="
                                inline-block
                                py-2
                                px-7
                                border border-[#E5E7EB]
                                rounded-full
                                text-base text-body-color
                                font-medium
                                hover:border-primary hover:bg-primary hover:text-green-400
                                transition
                                "
                                target="_blank"
                                rel="noreferrer"
                                >
                            View Repository
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                        <div className="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                            src={noteTaker}
                            alt="project"
                            className="w-full ml-4"
                            />
                            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                                <a
                                    href="https://note-taker-demo-nu.herokuapp.com/"
                                    className="
                                    font-semibold
                                    text-dark text-xl
                                    sm:text-[22px]
                                    md:text-xl
                                    lg:text-[22px]
                                    xl:text-xl
                                    2xl:text-[22px]
                                    mb-4
                                    block
                                    hover:text-green-400
                                    transition
                                    "
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                Note Taker
                                </a>
                            </h3>
                            <p className="text-base font-thin text-body-color leading-relaxed mb-7">
                                Note Taker is used to write and save your important notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.
                            </p>
                            <a
                                href="https://github.com/vcristian1/note-taker-demo"
                                className="
                                inline-block
                                py-2
                                px-7
                                border border-[#E5E7EB]
                                rounded-full
                                text-base text-body-color
                                font-medium
                                hover:border-primary hover:bg-primary hover:text-green-400
                                transition
                                "
                                target="_blank"
                                rel="noreferrer"
                                >
                            View Repository
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;