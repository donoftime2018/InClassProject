import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import AddItem from './components/addItem'
import Dashboard from './components/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Add Item page */}
        <Route path="/add-item" element={<AddItem />} />

        {/* Home/default page */}
        <Route path="/" element={<Dashboard/> } />
      </Routes>
    </Router>
  )
}

export default App
