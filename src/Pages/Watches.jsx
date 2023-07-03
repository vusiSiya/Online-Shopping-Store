import React from 'react'
import Items from '../Components/Items'
import data from '../Data'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Watches() {
    const [watchesData, setClothesData] = React.useState([])
    const [count, setCount] = React.useState(0)
  React.useEffect(()=>{
    setClothesData(data.watches)
  }, [])
    function handleClick(id) {
        setCount(prevCount => prevCount + 1)
    }
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
