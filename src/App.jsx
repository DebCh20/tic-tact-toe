import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rows from "./Rows.jsx";

function App() {
  // const [state, setState] = useState(Array(9).fill(null));

  return (
    <>
      <div className="grid" >
      <Rows/>      
      </div>
    </>
  )
}

export default App
