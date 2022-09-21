import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <div >
        <TypeAnimation
        sequence={[
            'Resume', 
            3000,
            '',
            100,
            () => {
            console.log('Done typing!'); // Place optional callbacks anywhere in the array
            }
        ]}
        className=''
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '3em',

    }}
        />
    </div>
  );
};

export default ExampleComponent;