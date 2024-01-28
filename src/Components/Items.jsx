import React from 'react'
import { Link } from 'react-router-dom'

export default function Items({product, linkState}) {

  return (
    <div id={product.id} className='product'>
      <Link
        to={`/products/${product.id}`}
        className="product-link"
        state={linkState}
      >
        <img
          alt={product.name.toLowerCase()}
          style={{fontStyle:"italic"}}
          src={product.imgUrl}
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
