import React from 'react'
import getHigher from '../images/gethigher.png'
import weather from '../images/weather.png'
import worldview from '../images/worldview.png'
import yelpcamp from '../images/yelpcamp.png'
import ExampleComponent from './projectsTypingComponent'
import nextflix from '../images/nextflix.png'
// In Navbar, we can assign a style from an object by using curly braces
function Projects() {
    
    return (
        <div className="p-0 bg-white">
            <div className="m-4 md:ml-10 lg:ml-20 md:mr-10 lg:mr-20 md:mb-10 lg:mb-20 md:p-10 lg:p-20 lg:-mt-14">
                <ExampleComponent />
                {/* <h2 className="text-center mt-5 ml-2 mb-10 lg:mt-24 tracking-tight text-4xl">Projects</h2> */}
                <p className="m-4 font-thin mt-5 mb-10 md:text-2xl sm:text-1xl text-gray-500">To deploy any project, be sure to click on the project name. To view the repository, click on View Repository.</p>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                            <div className="bg-white rounded-lg overflow-hidden mb-10">
                                <img
                                src={nextflix}
                                alt="project"
                                className="w-full"
                                />
                                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Next.js
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Typescript
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Tailwind
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>TMDB API
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Vercel
                                </div>
                                <h3>
                                    <a
                                        href="https://moviesjs.vercel.app/"
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
                                    Nextflix
                                    </a>
                                </h3>
                                <p className="text-base font-thin text-body-color leading-relaxed mb-7">
                                Nextflix is a Netflix clone application built using Next.js, Tailwind, Typescript, and Vercel to deploy. Using the TMBD API (The Movie Database) users are able to browse a selection of movies from Netflix Originals, Top Rated, Horror, Comedy, Action-Thriller, Trending, and more.
                                </p>
                                <a
                                    href="https://github.com/vcristian1/Nextflix-React"
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
                                src={yelpcamp}
                                alt="project"
                                className="w-full"
                                />
                                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>MongoDB
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Express.js
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Node.js
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Mongoose
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Bootstrap 
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>EJS
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Cloudinary
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Mapbox API
                                </div>
                                <h3>
                                    <a
                                        href="https://hidden-tor-07938.herokuapp.com/"
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
                                    Yelpcamp
                                    </a>
                                </h3>
                                <p className="text-base font-thin text-body-color leading-relaxed mb-7">
                                Yelpcamp is a user review and recommendation application of the best campgrounds in the USA. The idea is based off of the app Yelp which is a company that publishes crowd-sourced reviews about businesses.

                                </p>
                                <a
                                    href="https://github.com/vcristian1/yelpcamp"
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
                                src={worldview}
                                alt="project"
                                className="w-full"
                                />
                                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>React.js
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>GraphQL
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Apollo
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>MongoDB
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Express.js
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Bootstrap React
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Three.js
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>React-Three-Fiber
                                </div>
                                <h3>
                                    <a
                                        href="https://my-world-view.herokuapp.com/"
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
                                    WorldView
                                    </a>
                                </h3>
                                <p className="text-base font-thin text-body-color leading-relaxed mb-7">
                                A Full Stack application that is a visual educational resource for users to learn about historical events that occurred in different centuries around the world. The 3D globe, built with Three.js and React-Three-Fiber, has numerous coordinates identifying a historical event, and can render the event description and date on click of the coordinate.                                </p>
                                <a
                                    href="https://github.com/vcristian1/WorldvIEW"
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
                                
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Google Jobs API
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Google Maps API
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Handlebars
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Tailwind
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Express.js
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Node.js
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>MySQL
                                </div>
                                <h3>
                                    <a
                                        href="https://get-higher.herokuapp.com/"
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
                                    GetHigher
                                    </a>
                                </h3>
                                <p className="text-base font-thin text-body-color leading-relaxed mb-7">
                                A Full Stack application that functions as your all in one job finder for job seekers. Using the Google Job Search API, Get Higher provides a free service to job seekers including a job search, saved jobs, and career match quiz to assist users during their job hunt.
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
                                src={weather}
                                alt="project"
                                className="w-full"
                                />
                                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Open Weather API
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>Javascript
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>HTML
                                </div>
                                <div
                                    className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="0"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-arrow-right mr-2"
                                    >
                                    </svg>CSS
                                </div>
                            
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
                                    A dynamic Weather Application powered by the Open Weather API. Open Weather API is used to pull the live weather outlook for the city you are currently located in, so users can plan accordingly before going outside. Once you allow your location to be shared on your local machine, the City name you are located in populates below the current date.                                    </p>
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
                    </div>
            </div>
        </div>
    );
}

export default Projects;