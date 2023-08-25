import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Child component
const ChildComponent = forwardRef((props, ref) => {
  const childRef = useRef();

  // Expose the function to the parent component
  useImperativeHandle(ref, () => ({
    doSomething: () => {
      console.log('Child component did something');
      // Additional logic goes here
    }
  }));

  return <div>Child Component</div>;
});

// Parent component     
const ParentComponent = () => {
  const childRef = useRef();
  const handleClick = () => {
    childRef.current.doSomething();

  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default ParentComponent;