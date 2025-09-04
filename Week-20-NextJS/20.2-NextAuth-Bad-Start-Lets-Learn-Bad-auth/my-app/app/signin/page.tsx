"use client"
import axios from "axios";

export default function Signin(){
    return <div>
        Sign in Page 
        <br/>
        <input/>
        <input/>
        <button onClick={async()=>{
            const res = await axios.post("http://localhost:3000/api/signin", {
                username: "asd",
                password: "123"
            });

            localStorage.setItem("token", res.data.token);
        }}>Sign In</button>
    </div>
}