import React from 'react'
import {
RouterProvider,
createBrowserRouter,
createRoutesFromElements,
Route
} from "react-router-dom"
import './App.css'
import HomeLayout from './Components/HomeLayout'
import Home from "./Pages/Home"
import About, { loader as aboutLoader } from "./Pages/About"
import Products, { loader as productsLoader } from "./Pages/Products"
import ProductDetail,{loader as productDetailLoader} from "./Pages/ProductDetail"
import ProductsList from "./Pages/ProductsList"
import ResourceNotFound from "./Pages/ResourceNotFound"
import ErrorElement from "./Components/ErrorElement"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"
        element={<HomeLayout />}
    >
        <Route index element={<Home />} />
        <Route
            path="about"
            element={<About />}
            loader={aboutLoader}
        />
        <Route
            path="products"
            element={<Products />}
            loader={productsLoader}
            errorElement={<ErrorElement />}
        />
        <Route
            path="/products/:id"
            element={<ProductDetail />}
            loader={productDetailLoader}
            errorElement={<ErrorElement />}
        />
        <Route
            path="on-cart"
            element={<ProductsList />}
        />
        <Route path="*" element={<ResourceNotFound />} />
    </Route>
))

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}