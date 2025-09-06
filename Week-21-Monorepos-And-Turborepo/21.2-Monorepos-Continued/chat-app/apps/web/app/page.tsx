"use client"

import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [roomId, setRoomId] = useState("");

  const router = useRouter();
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        flexDirection: "column",

      }}>
        <TextInput onChange={(e)=>{
          setRoomId(e.target.value);
        }} size="big" placeholder="Enter Room ID" />
        <button onClick={()=>{
          router.push(`/chat/${roomId}`);
        }} style={{padding: "10px", marginTop: "10px", borderRadius: "4px", cursor: "pointer", backgroundColor: "lightgreen", color: "black"}}>Join Room</button>
      </div>
      
    </div>
  );
}
