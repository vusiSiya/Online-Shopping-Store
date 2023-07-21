import React from 'react'
import './App.css'
import Home from "./Pages/Home"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import ClothingDetail from "./Pages/ClothingDetail"
import HomeLayout from './Pages/HomeLayout'
import { BrowserRouter, Routes, Route} from "react-router-dom"

export default function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout/>}>
            <Route index element={<Home />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="watches" element={<Watches />} />
            <Route path="cart" element={<ClothesBought/>}>
            <Route path=":id" element={<ClothingDetail />} />
        </Routes>
    </BrowserRouter>
  )
}