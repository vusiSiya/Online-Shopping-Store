import React from 'react'
import {
  Await,
  useLoaderData,
  defer
} from "react-router-dom"
import getProductsData from '../../api'
import {cartContext} from "module"

export async function loader({ params }) {
  return defer({product: getProductsData(params.id)});
}

export default function ProductDetail() {

  const dataPromise = useLoaderData();
  const {addToCart} = React.useContext(cartContext)
  
  const sectionStyle = {
    margin: "auto",
    padding: "0.5em",
    color: "black",
    fontSize: "1rem",
    borderRadius: "0.5rem",
  }
  
  function renderProductDetail(product) {
    return (
      <section 
        style={{ sectionStyle }} 
        id={product.id} 
        className='product details'
      >
        <div className="selected-product">
          <img src={product.img} className='product--img' />
          <div className="content">
            <p id="details" className='product--name'>{product.name}</p>
            <p id="details" className='price'>Price: R {product.price}</p>
            <button id={product.id}  className='btn--cart' onClick={()=>addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
        <section className="description">
          <h4>Details</h4>
          <span className="description">
            lorem ipsum ipsum lorem ipusm lorem
            ipsum ipsum lorem ipusm<br />
            lorem ipsum ipsum lorem ipusm lorem ipsum ipsum lorem<br />ipusm
            lorem ipsum ipsum lorem ipusm lorem ipsum ipsum lorem ipusm<br />
          </span>
        </section>
      </section>
    )
    
  }

  
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Await resolve={dataPromise.product}>
        {(product)=>renderProductDetail(product)}
      </Await>
    </React.Suspense>

  )
}