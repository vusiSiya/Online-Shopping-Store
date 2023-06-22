import React from 'react'
import {Outlet} from "react-router-dom"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Items from '../Components/Items'
import data from '../Data'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Home(props) {
  
  const products = []
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
      item={item}
      handleClick={item => props.handleClick(item.id)}
    />
  }
  return (
    <>
      {products}
    </>
  )
}