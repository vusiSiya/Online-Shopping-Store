import React from 'react'
import NavBar from '../Components/NavBar'
import Items from '../Components/Items'
import Footer from '../Components/Footer'
import data from '../Data'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Men() {
const [clothesData, setClothesData] = React.useState([])
  React.useEffect(()=>{
    setClothesData(data.guys)
  },[])
  //console.log(clothesData)
  const clothes = clothesData.map(item => {
    return <Items
      key={item.id}
      product={item}
      handleClick={item => handleClick(item.id)}
    />
  })
  return (
    <>
      <h3 className='slogan'>Men</h3>
      <div className="products--parent">
        {clothes}
      </div>
    </>
  )
}
