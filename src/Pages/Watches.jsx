import React from 'react'
import Items from '../Components/Items'
import data from '../Data'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Watches(props) {
  const [watchesData, setClothesData] = React.useState([])
  React.useEffect(()=>{
    setClothesData(data.watches)
  }, [])
  //console.log(watchesData)
  const watches = watchesData.map(product => {
    return <Items
      key={product.id}
      product={product}
      handleClick={product => handleClick(product.id)}
    />
  })
  return (
    <>
      {watches}
    </>
  )
}
