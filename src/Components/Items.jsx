import React from 'react'
import { Link } from 'react-router-dom'

export default function Items(props) {

  const { product } = props;
  return (
    <div id={product.id} className='product'>
      <Link
        to={`${product.id}`}
        className="product-link"
      >
        <img
          alt={product.name}
          src={product.img}
          className='product--img'
        />
        <p
          className='product--name'>
          {product.name}
        </p>
      </Link>
    </div>

  )
}
