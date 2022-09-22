import { TypeAnimation } from 'react-type-animation';

const headerTypingComponent = () => {
  return (
    <div >
        <TypeAnimation
        sequence={[
            'Hello,', // Types 'One'
            1000, // Waits 1s
            'Im Cristian Vargas', // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            'Nice to meet you!', // Types 'Three' without deleting 'Two'
            2000, // Waits 1s
            () => {
            
            }
        ]}
        className='text-green-400 md:ml-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:ml-0'
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        
        />
    </div>
  );
};

export default headerTypingComponent;