import React from 'react';

function Skills() {
    
    return (
        <div>
            <div className="bg-white">
                    <div id="resume" className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-rows-1">
                      <div>
                        <dl className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="sm:text-2xl md:text-3xl lg:text-4xl text-green-400">Technologies</dt>
                                <dd className="font-thin mt-2 sm:text-1xl md:text-2xl lg:text-2xl text-gray-500">JavaScript ES6, HTML5, CSS3, jQuery, Node.js, Express.js, Handlebars.js, React.js, MySQL, Sequelize, NoSQL, MongoDB, Mongoose, Insomnia, RESTful APIs, Server Side APIs, Bootstrap, Tailwind, Heroku, GitHub, Git, Visual Studio Code</dd>
                            </div>
                    
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="sm:text-2xl md:text-3xl lg:text-4xl text-green-400">Education</dt>
                                <dd className="font-thin mt-2 sm:text-1xl md:text-2xl lg:text-2xl text-gray-500">Northwestern University, Evanston, IL - Full Stack Web Development Bootcamp
                                </dd>
                                <dd className="font-thin mt-2 sm:text-1xl md:text-2xl lg:text-2xl text-gray-500">Triton College, River Grove, IL - Associate of Arts (AA)
                                </dd>
                            </div>
                    
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="sm:text-2xl md:text-3xl lg:text-4xl text-green-400">Certifications</dt>
                                <dd className="font-thin mt-2 sm:text-1xl md:text-2xl lg:text-2xl text-gray-500">UDEMY - The Web Developer Bootcamp 2022</dd>
                            </div>
                        </dl>
                      </div>
                    </div>
                </div>
        </div>
    );
}

export default Skills;