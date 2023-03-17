import React from "react"
import Items from "../Items"
import attires from "./Data/attires"

export default function(){
  const clothes = attires.map( (item)=>{
    return <Items 
            key ={item.id}
            product = {item}
            />
  })
  return(
    <div>
      <h1>Traditional attires</h1>
      {clothes}
    </div>
  )
}