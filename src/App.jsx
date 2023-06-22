import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Items from './Components/Items'
import Footer from './Components/Footer'
import Home from "./Pages/Home"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import HomeLayout from './Pages/HomeLayout'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}