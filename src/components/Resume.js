import React from 'react'
import resumePdf from '../images/SER.pdf'

function Resume () {
    return (
      <div className='ml-20 mr-20 mb-20 p-20'>
        <div className='text-center'>
            <h2  className="text-3xl tracking-tight sm:text-4xl">Resume & Technical Skills</h2>
            <p className="font-thin mt-10 mb-10 text-2xl sm:text-1xl text-gray-500">Full Stack Engineer leveraging background in management to provide unique perspectives on how users interact with websites, applications, and software platforms.</p>
        </div>
        <iframe 
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