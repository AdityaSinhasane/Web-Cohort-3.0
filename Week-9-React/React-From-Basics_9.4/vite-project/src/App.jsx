
// CONCPET :: Children in React
// Children are the elements that are passed between the opening and closing tags of a component.
/*function App() {
  return (
   <div style={{display:"flex"}}>
      <Card>
        <p>Hi there</p>
      </Card>
      <Card>
        <div style={{color:"gray"}}>
          <p style={{}}>What do you want to post?</p>
          <input type="text"/>
        </div>
      </Card>
   </div>
  )
}

function Card({ children }) {
  return (
    <div style={{backgroundColor: 'black', borderRadius: '10px', color: 'white', padding: '10px', fontSize: '10px', margin: '10px'}}>
      Upper topbar 
      {children}
      Lower bottom footer
    </div>
  );
}


export default App;*/














// CONCPET :: List & Keys in React
// Children are the elements that are passed between the opening and closing tags of a component.

/*function App() {
  const todos = [
    {
      id: 1,
      title: "Go to gym",
      done: false
    },
    {
      id: 2,
      title: "Eat food",
      done: true
    },
];

  const todosComponents = todos.map((todo) =>
    <Todo key={todo.id} title={todo.title} done={todo.done} />
  );

  return (
    <div>
      {todosComponents}
    </div>
  );
}

function Todo({ title, done }) {
  return (
    <div>
      {title} - {done ? "Done!" : "Not Done!"}
    </div>
  );
}

export default App;*/









// CONCPET :: Inline styles

/*function App() {

  return (
    <div>
      <MyComponent/>
    </div>
  );
}

function MyComponent() {
  return (
    <div style={{ backgroundColor: 'red', color: 'white', padding: '20px', borderRadius: '30px' }}>
      Hello, World!
    </div>
  );
}
export default App;*/












// CONCPET :: Class based components

/*import React, { Component } from 'react';

function App() {
  return (
    <div>
      <ClassCounter/>
    </div>
  );
}

class ClassCounter extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default App;*/









// CONCPET :: life cycle events/methods

/*import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div>
      <MyComponent/>
    </div>
  );
}

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or count updated');

  }, [count]); // Runs on mount and when count changes

	useEffect(() => {
		    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
	}, [])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;*/











// CONCPET :: Error Boundaries

/*import React from 'react';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Card1/>
      </ErrorBoundary>
      <Card2/>
    </div>
  );
}

function Card1(){

  throw new Error("Error while rendering Card1");

  return <div style={{backgroundColor: 'gold', borderRadius: '10px', color: 'whiblackte', padding: '10px', fontSize: '10px', margin: '10px'}}>
    hi there
  </div>
}

function Card2(){
  return <div style={{backgroundColor: 'gold', borderRadius: '10px', color: 'black', padding: '10px', fontSize: '10px', margin: '10px'}}>
    Hello
  </div>
}



class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <div style={{ background: 'red', color: 'white', padding: '10px', borderRadius: '5px' }}>Something went wrong.</div>
        }

        return this.props.children; 
    }
}


export default App;*/














// CONCPET :: Fragments
import React from 'react';

function App() {
  return (
    <>
      <div>Tu kon yee bee</div>
      <div>mai bolta huu, Tu kon yee bee</div>
    </>
  );
}

export default App;

