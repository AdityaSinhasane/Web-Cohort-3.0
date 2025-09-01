import Image from "next/image";

export default function Home() {
  return(
    <div>
      <Button>Sign up</Button>
      <Button>Sign iin</Button>
    </div>
  )
}

function Button({children}){
  return <button>
    {children}
  </button>
}
