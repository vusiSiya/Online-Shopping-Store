import React from 'react'
import './App.css'
import HomeLayout from './Pages/HomeLayout'
import About from "./Pages/About"
import Products from "./Pages/Products"
import ProductDetail from "./Pages/ProductDetail"
import ProductsList from "./Pages/ProductsList"
import { BrowserRouter, Routes, Route} from "react-router-dom"

export default function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout/>}>
            <Route path="about" element={<About />} />
            
            <Route index element={<Products />} >
              <Route path="on-cart" element={<ProductsList />}/>
              <Route path=":id" element={<ProductDetail />} />
            </Route> 
              
            <Route path="*" element={<ResourceNotFound />} />          
          </Route>
        </Routes>
    </BrowserRouter>
  )
}