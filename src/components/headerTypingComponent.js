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
            console.log('Done typing!'); // Place optional callbacks anywhere in the array
            }
        ]}
        className='text-green-400'
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '6em',

    }}
        />
    </div>
  );
};

export default headerTypingComponent;