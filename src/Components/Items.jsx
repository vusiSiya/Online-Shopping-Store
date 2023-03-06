import React from 'react'

export default function Items(props) {
  return (
    <div className='anItem'>
      <div className='ImageOfItem'>
         <img src={props.img} />
      </div>
      <p className='NameOfItem'>{props.name}</p>
      <p className='PriceOfItem'>{props.price}</p>
    </div>
 
  )
}