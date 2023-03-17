import React from 'react'

export default function Items(props) {
  //const { product } = props;
  //console.log(product)
  return (
    <div className='product'>
      <div className='product--img'>
        <img src={`./Images/${props.product.img}`} />
      </div>
      <p className='product--name'>{props.product.name}</p>
      <p className='price'>Price:
        R{props.product.price}
      </p>
    </div>

  )
}