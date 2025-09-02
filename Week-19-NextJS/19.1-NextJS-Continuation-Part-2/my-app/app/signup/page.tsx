"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Signup(){
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const router = useRouter();

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input type="text" placeholder="username" ref={usernameRef}/>
            <input type="password" placeholder="password" ref={passwordRef}/>
            <button onClick={async ()=>{
                await axios.post("http://localhost:3000/api/v1/signup",{
                    username: usernameRef.current.value,
                    password: passwordRef.current.value
                });
                router.push("/signin");

            }}>Sign up</button>
        </div>
    </div>
}