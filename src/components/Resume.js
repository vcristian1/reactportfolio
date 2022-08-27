import React from 'react'
import resumePdf from '../images/SER.pdf'

function Resume () {
    return (
      <div className='md:ml-20 lg:ml-20 md:mr-20 lg:mr-20 md:mb-20 lg:mb-20 md:p-20 lg:p-20 lg:-mt-14'>
        <div className='md:text-center lg:text-center'>
            <h2 className="text-center mt-5 ml-2 mb-10 lg:mt-20 tracking-tight text-4xl">Resume</h2>
            <p className="m-4 font-thin mt-10 mb-10 md:text-2xl sm:text-1xl text-gray-500">Full Stack Engineer leveraging background in management to provide unique perspectives on how users interact with websites, applications, and software platforms.</p>
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