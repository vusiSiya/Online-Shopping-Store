import React from "react"
import Data from "./Data"

export default function Girls(){
  let randomIndex = Math.floor(Math.random() * 2) + 1;
  let randomPick = randomIndex > 1 ? data[0].girls : data[0].guys;
  
  const products = randomPick.map( (item, i) => {
    let randomIndex = Math.floor(Math.random() * randomPick.length) + i;
    let rItem = randomPick[randomIndex]
    if(i < 3){   
      return <Items
        key={item.id}
        product={rItem}
        handleClick={item => handleClick(item.id)}
      />
    }
  })
}