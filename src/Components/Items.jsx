import React from 'react'
import { Link } from 'react-router-dom'

export default function Items(props) {
  const {product} = props;
  return (
      <div id={props.id} className='product'>
        <img src={product.img} className='product--img' />
        <div className="content">
          <p className='product--name'>
            {product.name}
          </p>
          <p className='price'>
            R{product.price}
          </p>
          <button onClick={(e)=>props.handleClick(e)} className='Btn--cart'>Add to Cart</button>
        </div>
      </div>
  )
}