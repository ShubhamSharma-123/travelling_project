import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
