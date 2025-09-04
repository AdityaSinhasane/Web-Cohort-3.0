"use client"

import { useState } from "react"

export default function Button(){

    const [count, setCount] = useState(0);

    return <button onClick={()=>{
        setCount(count => count + 1);
    }}>Click Me ({count})</button>;
}