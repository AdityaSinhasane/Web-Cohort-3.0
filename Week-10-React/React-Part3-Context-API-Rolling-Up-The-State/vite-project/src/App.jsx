

// CONCEPT :: Rolling up the state
/*import { useState } from "react";

function App() {
  
  return (
    <div>
      <LightBulb/>
    </div>
  )
};


function LightBulb(){
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      // bulbOn is a prop to the BulbState component
      // bulbOn, setBulbOn are props to the ToggleBulbState
      <BulbState bulbOn={bulbOn}/>
      <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn}/>
    </div>
  );
};


// This component will render LightBulb on/off image
function BulbState({bulbOn}){

  return(
    <div>
      {bulbOn ? "bulb on" : "Bulb off"}
    </div>
  );
};


function ToggleBulbState({bulbOn, setBulbOn}){
  function toggle(){
    //setBulbOn( currentState => !currentState);
    setBulbOn(!bulbOn);
  }

  return(
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
};

export default App*/















/*// CONCPET :: Props && Props Drilling

import { useState } from "react";

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      <Light bulbOn={bulbOn} setBulbOn={setBulbOn}/>
    </div>
  )
};


function Light({bulbOn, setBulbOn}){
  return (
    <div>
      <LightBulb bulbOn={bulbOn}/>
      <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn}/>
    </div>
  );
};


// This component will render LightBulb on/off image
function LightBulb({bulbOn}){

  return(
    <div>
      {bulbOn ? "bulb on" : "Bulb off"}
    </div>
  );
};


function LightSwitch({bulbOn, setBulbOn}){
  function toggle(){
    //setBulbOn( currentState => !currentState);
    setBulbOn(!bulbOn);
  }

  return(
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
};

export default App;*/














// CONCPET :: Context API

/*import { useState, createContext, useContext } from "react";



const BulbContext = createContext();


export function BulbProvider({ children })
{

  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
      }}>
        {children}
      </BulbContext.Provider>
        
}

function App() {
  
  return (
    <div>
      <BulbProvider>
        <Light/>
      </BulbProvider>
    </div>
  )
};


function Light(){
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
};


// This component will render LightBulb on/off image
function LightBulb(){
  const { bulbOn } = useContext(BulbContext);

  return(
    <div>
      {bulbOn ? "bulb on" : "Bulb off"}
    </div>
  );
};


function LightSwitch(){
  const { bulbOn, setBulbOn } = useContext(BulbContext);

  function toggle(){
    setBulbOn(!bulbOn);
  }

  return(
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
};

export default App;*/







/*import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Incrase() {
  const {setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;*/











// CONCEPT :: Recoil(State Management Library)
import React from 'react';  
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

const count = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function Parent() {
  return (
    <RecoilRoot>
      <Incrase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Incrase() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;



