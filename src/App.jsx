import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Items from './Components/Items'
import Footer from './Components/Footer'
import Home from "./Pages/Home"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import data from './Data'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function App() {
  const [count, setCount] = React.useState(0)

  function handleClick(id) {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
