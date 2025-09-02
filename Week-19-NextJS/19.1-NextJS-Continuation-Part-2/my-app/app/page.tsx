import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl ">Todo Application</h1>
        <br />
        <Link className="text-md border m-2 p-2" href="/signin">Sign in to Todo App</Link>
        <br />
        <br/>
        <Link className="text-md border m-2 p-2" href="/signup">Sign up to Todo App</Link>
      </div> 
    </div>
  );
}
