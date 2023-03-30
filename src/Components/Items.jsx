import React from 'react'

export default function Items(props) {
  //const { product } = props;
  //console.log(product)
  return (
    <div className='product'>
      <h2 className="product--title" >
        {props.product.title}
      </h2>
      <img src={`${props.product.img}`} className='product--img' />
      <p className='product--name'>
        {props.product.name}
      </p>
      <p className='price'>
        Price: R{props.product.price}
      </p>
    </div>

  )
}