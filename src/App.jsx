import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Exempellösning - React Context</h1>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
  )
}

export default App
