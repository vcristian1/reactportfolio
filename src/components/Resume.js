import React from 'react'
import resumePdf from '../images/SER.pdf'
import ExampleComponent from './resumeTypingComponent'
function Resume () {
    return (
      <div className='m-4 md:ml-10 lg:ml-20 md:mr-10 lg:mr-20 md:mb-10 lg:mb-20 md:p-10 lg:p-20 lg:-mt-14'>
        <div className=''>
          <ExampleComponent />
          {/* <h2 className="text-center mt-5 ml-2 mb-10 lg:mt-20 tracking-tight text-4xl">Resume</h2> */}
          <p className="m-4 font-thin mt-5 mb-10 md:text-2xl sm:text-1xl text-gray-500">Full Stack Engineer leveraging background in management to provide unique perspectives on how users interact with websites, applications, and software platforms.</p>
        </div>
        <iframe 
            className='px-2'
          src={resumePdf}
          width='100%'
          height='700px'
          title="Cristian Vargas Software Engineer Resume"
          allow="autoplay"
        >
        </iframe>
      </div>
    );
  }
  
  export default Resume;