import React from 'react';

function Skills() {
    
    return (
        <div>
            <div className="bg-white">
                    <div id="resume" className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                      <div>
                        <h2  className="text-3xl tracking-tight sm:text-4xl">Resume & Technical Skills</h2>
                        <p className="font-thin mt-4 text-2xl text-gray-500">Full Stack Engineer leveraging background in management to provide unique perspectives on how users interact with websites, applications, and software platforms.</p>
                  
                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="text-green-400">Technologies</dt>
                                <dd className="font-thin mt-2 text-sm text-gray-500">JavaScript ES6, HTML5, CSS3, jQuery, Node.js, Express.js, Handlebars.js, React.js, MySQL, Sequelize, NoSQL, MongoDB, Mongoose, Insomnia, RESTful APIs, Server Side APIs, Bootstrap, Tailwind, Heroku, GitHub, Git, Visual Studio Code</dd>
                            </div>
                    
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="text-green-400">Education</dt>
                                <dd className="font-thin mt-2 text-sm text-gray-500">Northwestern University, Evanston, IL - Full Stack Web Development Bootcamp
                                </dd>
                                <dd className="font-thin mt-2 text-sm text-gray-500">Triton College, River Grove, IL - Associate of Arts (AA)
                                </dd>
                            </div>
                    
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="text-green-400">Certifications</dt>
                                <dd className="font-thin mt-2 text-sm text-gray-500">UDEMY - The Web Developer Bootcamp 2022</dd>
                            </div>
                    
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="text-green-400">References</dt>
                                <dd className="font-thin mt-2 text-sm text-gray-500">Ozzy Cardenas - Full Stack Engineer at Sprout Social</dd>
                                <dd className="font-thin mt-2 text-sm text-gray-500">Craig Culbert - CEO at First Look Appraisals</dd>
                                <dd className="font-thin mt-2 text-sm text-gray-500">Ankit Patel - Vice President of Operations at First Look Appraisals</dd>
                            </div>
                    
                            <div cclassName="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <a
                                    href="https://docs.google.com/document/d/1SkkCre7IGgS1G4YeHhUHmMG9ofgNWYT43QC-ixaGiVI/edit?usp=sharing"
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
                                    >
                                View Resume
                                </a>
                            </div>
                        </dl>
                      </div>
                    </div>
                </div>
        </div>
    );
}

export default Skills;