import React from 'react'
import { Link } from 'react-router-dom'

export default function Items(props) {
  return (
      <div id={props.id} className='product'>
        <img src={props.product.img} className='product--img' />
        <div className="content">
          <p className='product--name'>
            {props.product.name}
          </p>
          <p className='price'>
            R{props.product.price}
          </p>
          <button onClick={props.handleClick} className='Btn--cart'>Add to Cart</button>
        </div>
      </div>
  )
}