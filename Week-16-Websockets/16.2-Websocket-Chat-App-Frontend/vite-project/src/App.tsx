import { useEffect, useRef, useState } from "react"

function App() {

  const [messages, setMessages] = useState(["hi there", "hello"]);
  const wsRef = useRef();
  const inputRef = useRef();

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event)=>{
      setMessages( m =>[...m, event.data]);
    }
    wsRef.current = ws;

    ws.onopen = () =>{
      ws.send(JSON.stringify({
        type: "join",
        payload:{
          roomId: "red"
        }
      }));
    }

    //cleanup logic
    return ()=>{
      ws.close();
    }
  },[]);
 
  return (
    <div className="h-screen bg-black">
      <br/>
      <br/>
      <div className="h-[85vh]">
        {messages.map(message =>
          <div className="m-8"> 
            <span className="bg-white text-black rounded p-4">{message}</span>
          </div>
        )}
      </div>
      <div className="bg-white w-full flex">
        <input ref={inputRef} className="flex-1 p-4" type="text"/>
        <button onClick={()=>{
          const message = inputRef.current?.value;
          wsRef.current.send(JSON.stringify({
            type:"chat",
            payload:{
              message: message
            }
          }));
        }} className="cursor-pointer bg-purple-600 text-white p-4">Send Message</button>
      </div>
    </div>
  )
}

export default App
