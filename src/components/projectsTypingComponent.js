import { TypeAnimation } from 'react-type-animation';

const projectsTypingComponent = () => {
  return (
    <div >
        <TypeAnimation
        sequence={[
            'Projects', 
            3000,
            '',
            100,
            () => {
            console.log('Done typing!'); // Place optional callbacks anywhere in the array
            }
        ]}
        className='text-center'
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '3em',

    }}
        />
    </div>
  );
};

export default projectsTypingComponent;