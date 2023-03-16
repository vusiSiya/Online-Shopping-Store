import React from 'react'

export default function Items(props) {
  const { product } = props;
  console.log(product)
  return (
    <div className='anItem'>
      <div className='ImageOfItem'>
        <img src={`./Images/${product.img}`} />
      </div>
      <p className='NameOfItem'>{product.name}</p>
      <p className='PriceOfItem'>{product.price}</p>
    </div>

  )
}