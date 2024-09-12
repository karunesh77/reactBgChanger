import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  

  return (
    <>
     <div className='w-full h-screen duration-200'
     style={{backgroundColor: color}}></div>

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
        <button 
        onClick={() => setColor("Red")} 
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>

        <button
        onClick={() => setColor("green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Green"}}>Green</button>

        <button
        onClick={() => setColor("Yellow")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>

        <button 
        onClick={() => setColor("Black")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>Black</button>

        <button 
        onClick={() => setColor("Blue")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>

        <button 
        onClick={() => setColor("Pink")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}>Pink</button>
      </div>
    </div>
    </>
  )
}

export default App
