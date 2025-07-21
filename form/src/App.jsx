import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentForm from './assets/studentform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'> 
            <StudentForm/>
      </div>


    </>
  )
}

export default App
