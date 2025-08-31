
/*import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counter.js';



function App() {
  
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter(){
  
  return <div>
    <CurrentCount />
    <Increase />
    <Decrease/>
  </div>
}

function CurrentCount(){
  const count = useRecoilValue(counterAtom);
  return( 
  <>
    {count}
  </>);
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom);
  function increase(){
    setCount(c => c + 1);
  }

  return (<div>
    <button onClick={increase}>Increase</button>
  </div>);
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom);
  return (<div>
    <button onClick={()=> setCount(c => c - 1)}>Decrease</button>
  </div>);
}

export default App;*/















// CONCEPT :: Memo in React.

/*import { useEffect, useState, memo } from "react";

function App() {
  
  return (
    <Counter/>
  )
}

function Counter(){
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount(c => c + 1);
    },3000);
  },[]);

  
  return <div>
    <CurrentCount/>
    <Increase />
    <Decrease/>
  </div>
}


const CurrentCount = memo(function (){
  
  return( 
  <>
    1
  </>);
});



const Increase = memo(function () {
  
  function increase(){
   
  }

  return (<div>
    <button onClick={increase}>Increase</button>
  </div>);
});



const Decrease = memo(function(){
 
  return (<div>
    <button onClick={{}}>Decrease</button>
  </div>);
});


export default App;*/











// CONCEPT :: Selector in Recoil
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter";

function App() {
  
  return (
   <>
      <RecoilRoot>
        <Button/>
        <Counter/>
        <IsEven/> 
      </RecoilRoot>
   </>
  )
}

function Button(){

  const setCount = useSetRecoilState(counterAtom);

  function increase(){
    setCount(c => c + 2);
  }

  function decrease(){
    setCount(c => c - 1);
  }

  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Counter(){
  const count = useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>

}

function IsEven(){
  const even = useRecoilValue(evenSelector);

  return <div>
    { even ? "Even" : "Odd"}
  </div>
}

export default App;
















