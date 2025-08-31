
// Hook :: 1.useState
/*import { useState } from 'react'

function App() {
  return (
   <div>
    <b>Hi there</b>
    <Counter/>
   </div>
  )
}

function Counter(){

  const [count, setCount] = useState(0)

  function increaseCount(){
    setCount(count + 1);
  }
  function decreaseCount(){
    setCount(count - 1);
  }
  function resetCount(){
    setCount(0);
  }

  return (
  <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease count</button>
    <button onClick={resetCount}>Reset count</button>
  </div>
  )
}
export default App*/










// Hook :: 2.useEffect
/*import { useState, useEffect } from 'react'

// conditional rendering
function App() {
  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(function(){
    setInterval(function(){
      setCounterVisible(c => !c);
    },5000);
  },[]);

  return (
   <div>
    {counterVisible ? <Counter/> : null}
   </div>
  )
}

//mounting, re-rendering, unmounting 
function Counter(){

  const [count, setCount] = useState(0);

  //hooking into the lifecycle events of react
  // we wanted to gaurd our setInterval from re-renders
  useEffect(function(){
    // mounting
    // this function will be called when the component is mounted
    console.log("on mount")
    let clock = setInterval(function(){
      setCount(function(count){
        return count + 1;
      });
    },1000); 

    // Unmounting
    // cleanup function
    // this function will be called when the component is unmounted
    return function(){
      //clearInterval
      console.log("on unmount")
      clearInterval(clock);
    }
    
  }, []); // dependencies array, cleanup, fetch inside the useEffect
   

  return (
  <div>
    <h1>{count}</h1>
  </div>
  )
}

export default App*/











// Concpet :: Dependency Array
// This code will taech you Re-learning of cleanup, useEffect. Learning about dependency array
import { useState, useEffect } from 'react'

export default function App() {

  const [count, setCount] = useState(0);
  const [ count2, setCount2 ] = useState(0);


  function increase(){
    setCount( count => count + 1);
  }

  function decrease(){
    setCount2( count => count - 1);
  }

  return (
    <div>
      <Counter count={count} count2={count2}/>
      <button onClick={increase}>Home</button>
      <button onClick={decrease}>Notification</button>
    </div>
  )
};

function Counter(props){

  useEffect(function(){
    console.log("mount");

    return function(){
      console.log("unmount");
    }
  },[]);


  useEffect(function(){
    console.log("Count has changed");

    return function(){
      console.log("cleanup inside second useEffect");
    }
  },[props.count]);

  return <div>
    Counter1 {props.count}
    <br/>
    Counter2 {props.count2}
  </div>
}













