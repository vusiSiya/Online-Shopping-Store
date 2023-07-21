import React from 'react'
import Items from '../Components/Items'
import data from '../Data'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Watches(props) {
  const [watches, setWatches] = React.useState([])
  React.useEffect(()=>{
    setWatches(data.watches)
  }, [])
  const watches = watchesData.map(product => {
    return <Items
      key={product.id}
      product={product}
    />
  });
  return (
    <>
      {watches}
    </>
  )
}
