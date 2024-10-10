import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './Component/Course'
import Nav from './Component/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="nav">
        <Nav/>
    </div>
      
      <Course/>
    </>
  )
}

export default App
