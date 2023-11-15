import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='mainText'>Hello Dojo!</h1>
      <h2>Things i need to do :</h2>
      <ol>
        <li className='listItem'>Learn react</li>
        <li className='listItem'>Climb mt.Everest</li>
        <li className='listItem'>Run a marathon</li>
        <li className='listItem'>Feed the dogs</li>
      </ol>
    </>
  )
}

export default App
