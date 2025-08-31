

// CONCEPT :: React Routing using Link & useNavigate hook

/*import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Landing/>}/>
            <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
            <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div> 
  )
};

function Layout(){
  return (
    <div style={{height: "100vh", backgroundColor: "lightGreen"}}>
      <Header/>
      <div style={{height:"90vh", backgroundColor: "#018786"}}>
        <Outlet/>
      </div>
      <Footer/>
    </div>
)}

function Header(){
  return <div>
    <Link to="/">Allen</Link> | <Link to="/neet/online-coaching-class-11">Class11</Link> | <Link to="/neet/online-coaching-class-12">Class12</Link>
  </div>;
}

function Footer(){
  return (
  <div>
      Footer | Contact us | Privacy Policy 
  </div>
)};

function Landing(){
  return (
    <div>
      <h1>Welcome to Allen</h1>
    </div>
  );
};

function ErrorPage(){
  return <div>
    Sorry, this page does not exist.
  </div>
}

function Class11Program(){
  return (
    <div>
      <h1>NEET program for class 11th</h1>
    </div>
  );
};

function Class12Program(){

  const navigate = useNavigate();

  function redirectUser(){
    navigate("/");
  }

  return (
    <div>
      <h1>NEET program for class 12th</h1>
      <button onClick={redirectUser}>Go back to landing page</button>
    </div>
  );
};


export default App;*/

















// CONCEPT :: useRef in React Part 1 
// reference to a value, such that when u change the value, the component DOES NOT RE-RENDER
/*import {  useRef } from 'react'
function App() {

  const inputRef = useRef();

  function focusOnInput(){
    inputRef.current.focus();
  }
  
  return (
    <div>
      Sign up: 
      <input ref={inputRef} type="text"/>
      <input type="text"/>
      <button onClick={focusOnInput}>Submit</button>
    </div> 
  )
};

export default App;*/



// CONCEPT :: useRef in React Part 2
// a clock with a start and stop button

import { useState, useRef } from 'react'

function App() {

  const [currentCount, setCurrentCount] = useState(0);
  const timer = useRef();

  function startClock(){
    let value = setInterval(function(){
      setCurrentCount(count => count + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock(){
    clearInterval(timer.current);
  }

  return (
    <div>
        {currentCount}
        <br/>
        <button onClick={startClock}>Start</button>
        <button onClick={stopClock}>Stop</button>
    </div>
  );
};

export default App;






