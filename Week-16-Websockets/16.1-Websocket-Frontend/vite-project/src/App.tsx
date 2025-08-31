
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [ws, setWs] = useState();
  const inputRef = useRef();

  function sendMessage(){
    if(!ws) return;

    if(ws.readyState === WebSocket.OPEN)
    {
      const message = inputRef.current.value;
      ws.send(message);
    } 
    else
    {
      alert("Socket not connected yet!");
    }
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setWs(ws);

    ws.onmessage = (e) =>{
      alert(e.data);
    }
  }, []);
  
  return (
    <div>
      <input ref={inputRef} type='text' placeholder='Message...' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
