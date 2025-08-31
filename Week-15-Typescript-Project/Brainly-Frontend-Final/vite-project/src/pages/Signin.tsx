import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios"
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Signin(){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            alert("Please fill in both fields");
            return;
        }

        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
            username,
            password,
        });

        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");
        //redirect the user to the dashboard
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="username"/>
            <Input reference={passwordRef} placeholder="password"/>
            <div className="flex justify-center pt-4">
                <Button onClick={signin} loading={false} variant="primary" text="Signin" fullWidth={true}/>
            </div>
        </div>
    </div>
}