import React from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  errorElement
} from "react-router-dom"
import './App.css'
import HomeLayout from './Components/HomeLayout'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Products, { loader as productsLoader } from "./Pages/Products"
import ProductDetail, { loader as productDetailLoader } from "./Pages/ProductDetail"
import ProductsList from "./Pages/ProductsList"
import ResourceNotFound from "./Pages/ResourceNotFound"
import ErrorElement from "./Components/ErrorElement"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/"
    element={<HomeLayout />}
  >
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />

    <Route
      path="products"
      element={<Products />}
      loader={productsLoader}
      errorElement={<ErrorElement />}
        
    >
      <Route path="on-cart" element={<ProductsList />} />
      <Route
        path=":id"
        element={<ProductDetail />}
        loader={productDetailLoader}
        errorElement={<ErrorElement />}
      />
    </Route>

    <Route path="*" element={<ResourceNotFound />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}