// Closure occurs when an inner function is able to access variable of outer function, even after outer 
// function has finished execution

import React, { useState } from 'react';

function Counter() {
  // Define a state variable using the useState hook
  const [count, setCount] = useState(0);

  // This handleClick function is a closure
  function handleClick() {
    // It can access the 'count' state variable
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

let x = 1;

const parentFunction = () => {
    let y = 2;
    console.log(y += 2);
    const child = () => {   
        console.log( y += 50)
    }
    child()
}
parentFunction()


const checkIife = ((num) => {
    return num + 3
})(3)
console.log(checkIife)