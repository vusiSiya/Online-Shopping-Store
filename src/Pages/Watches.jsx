import React from 'react'
//import NavBar from '../Components/NavBar'
import Items from '../Components/Items'
//import Footer from '../Components/Footer'
import data from '../Data'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Watches() {
const [watchesData, setClothesData] = React.useState([])
  React.useEffect(()=>{
    setClothesData(data.watches)
  },[])
  //console.log(watchesData)
  const watches = watchesData.map(item => {
    return <Items
      key={item.id}
      product={item}
      handleClick={item => handleClick(item.id)}
    />
  })
  return (
    <>
      <h3 className='slogan'>Watches</h3>
      <div className="products--parent">
        {watches}
      </div>
    </>
  )
}
