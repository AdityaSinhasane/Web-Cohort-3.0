
import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Otp } from './components/Otp'

function App() {

  return (
    <>
      {/* Using Normal CSS*/}
      {/* <div style={{display: "flex", justifyContent:"center"}}>
        <div>child 1</div>
        <div>child 2</div>
        <div>child 3</div>
      </div> */}

      {/* Using Tailwind */}
      {/* <div className='flex justify-between'>
        <div>child 1</div>
        <div>child 2</div>
        <div>child 3</div>
      </div> */}


      
      {/* <div className='grid grid-cols-12'>
        <div className='bg-blue-300 col-span-6'>child 1</div>
        <div className='bg-red-300 col-span-4'>child 2</div>
        <div className='bg-green-300 col-span-2'>child 3</div>
      </div>  */}




      {/* <div className='grid grid-cols-12'>
          <div className='bg-red-300 col-span-12 sm:col-span-5 text-2xl rounded-3xl'>hi there from the first div</div>
          <div className='bg-blue-300 col-span-12 sm:col-span-5'>hi there from the second div</div>
          <div className='bg-green-300 col-span-12 sm:col-span-2'>hi there from the third div</div>
      </div> */}



      {/* <div className='h-screen bg-blue-700'>
        <br/><br/><br/><br/>
        <Input type="text" placeholder={"username"}/>
        <Button disabled={false}>Sign Up</Button>
      </div> */}



      <div className='h-screen bg-blue-700'> 
        <br/> <br/> <br/>
        <Otp number={20}/>
      </div>

      










    </>
  )
}

export default App
