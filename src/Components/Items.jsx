import React from 'react'

export default function Items(props) {
  return (
    <div className='product'>
      <h2 className="product--title" >
        {props.product.title}
      </h2>
      <div className="image-wrapper">
           <img src={`${props.product.img}`} className='product--img' />
      </div>
      <div>
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
