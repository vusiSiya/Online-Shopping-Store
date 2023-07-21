import React from 'react'
import {Outlet} from "react-router-dom"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Items from '../Components/Items'
import data from '../Data'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Home(props) {
  const [allProducts, setAllProducts] = React.useState([]);
  const [selectedProducts, setSelectedProducts] = React.useState([]);
  React.useEffect(()=>{
    setAllProducts(data);
    /*
    With Mirage JS I would make this API call instead:
    fetch("/api/products").then( res => res.json()).then( _data => setAllProducts(_data))
    */
  }, [allProducts])
  
  const getArray = (_num) =>{
    let array = _num < 2 ?
      allProducts.girls
      : _num === 2 ? allProducts.watches : allProducts.guys; 
    return array;
  }
  
  for (let i = 0; i < 9; i++) {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let selectedArray = getArray(randomNum)
    let randomImage = Math.floor(Math.random() * selectedArray.length) + 1
    let item = selectedArray[randomImage];
    setSelectedProducts( (prevItems) => [...prevItems, item] );   
  }
  
  const selectedItems = selectedProducts.map( product =>{
    return <Items 
      key = {product}
      product = {product}
      handleClick = {(e)=>props.handleClick(e)}
    />
  })
  return (
    <>
      {selectedItems}
    </>
  )
}