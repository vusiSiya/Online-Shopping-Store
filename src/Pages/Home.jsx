import React from 'react'
//import NavBar from '../Components/NavBar'
//import Footer from '../Components/Footer'
import Items from '../Components/Items'
import data from '../Data'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Home() {
  let products = []
  //const getItems = ()=>{}
  for (let i = 1; i <= 8; i++) {
    let randomNum = Math.floor(Math.random() * 3) + 1
    let selection = randomNum === 1 ?
      data.girls
      :
      randomNum === 2 ? data.watches : data.guys;

    let randomImage = Math.floor(Math.random() * 6) + 1
    let item = randomNum === 2 ?
      data.watches[0] : selection[randomImage];

    products[i] = <Items
      key={item.id}
      product={item}
      handleClick={item => handleClick(item.id)}
    />
  }
  return (
    <>
      <h3 className='slogan'>Choose your best look</h3>
      <div className="products--parent">
        {products}
      </div>
    </>
  )
}