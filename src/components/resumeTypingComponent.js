import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <div >
        <TypeAnimation
        className='text-center text-2xl sm:text-4xl md:text-5xl lg:text-5xl'
        sequence={[
            'Resume', 
            3000,
            '',
            100,
            () => {
            console.log('Done typing!'); // Place optional callbacks anywhere in the array
            }
        ]}
        
        wrapper="div"
        cursor={true}
        repeat={Infinity}
      
        />
    </div>
  );
};

export default ExampleComponent;