/*import { useState } from 'react'

// CONCEPT :: Custom Hook Part 1(useCounter)

function useCounter(){
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count + 1);
    //setCount(c => c + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount
  }
}

function App() {
  return(
  <div>
    <Counter/>
    <Counter/>
  </div>
  );
};

function Counter()
{
  const {count, increaseCount} = useCounter(); 

  return (
    <div>
      <button onClick={increaseCount}>Increase Count {count}</button>
    </div>
  )
};

export default App;*/
















/*// CONCEPT :: Custom Hook Part 2(useFetch)
import { useState } from 'react';
import { useFetch } from './hooks/useFetch.js';

function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading } = useFetch('https://jsonplaceholder.typicode.com/posts/' + currentPost); 
  
  return(
  <div>
    <button onClick={()=> setCurrentPost(1)}>1</button>
    <button onClick={()=> setCurrentPost(2)}>2</button>
    <button onClick={()=> setCurrentPost(3)}>3</button>
    { loading ? "Loading....." : JSON.stringify(finalData) }
  </div>
  );
};


export default App;*/










// CONCEPT :: Custom Hook Part 2(usePrev)
/*import { useState } from "react";
import { usePrev } from "./hooks/usePrev";

function App() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  return (
    <div>
        <p>{state}</p>
        <button onClick={()=> setState(c => c + 1)}>Click Me</button>
        <p>The Previous value was {prev} </p>
    </div>
  );
};

export default App;*/














// CONCEPT :: Custom Hook Part 1(useDebounce)
/*import {  useRef } from "react";

function useDebounce(originalFn){
    const currentClock = useRef();

    const fn = ()=>{
      clearTimeout(currentClock.current);
      currentClock.current = setTimeout(originalFn, 200);
    }
    return fn;
};



function App() {
  function sendDataToBackend(){
    fetch("api.amazon.com/search/");
  }

  const debouncedFn = useDebounce(sendDataToBackend);

  return (
    <>
      <input type="text" onChange={debouncedFn} />
    </>
  );
};

export default App;*/










// CONCEPT :: Custom Hook Part 2(useDebounce)
import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
          setDebouncedValue(value);
      }, delay);

      return () => {
          clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
};



function App() {

  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 200);

  function change(e){
    setInputVal(e.target.value);
  }

  useEffect(()=>{
    //expensive operation
    // fetch
    console.log("Expensive Operation"); 
  },[debouncedValue]);
 
  return (
    <>
      <input type="text" onChange={change} />
    </>
  );

};


export default App;





