import React from 'react'
import {
  Await,
  Link,
  useLoaderData,
  useLocation,
  defer
} from "react-router-dom"
import getProductsData from '../../api'
import { CartContext } from "../Components/HomeLayout"

export async function loader({ params }) {
  return defer({ product: getProductsData(params.id) });
}

export default function ProductDetail() {

  const dataPromise = useLoaderData();
  const { addToCart } = React.useContext(CartContext)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.state.search);

  const filter = searchParams.get("category")
  function renderProductDetail(product) {
    return (
      <>
        <section
          className='product details'
        > 
          <Link
            to={`..${location.state.search || ""}`}
            relative="path"
            style={{ margin: "0em", display: "flex", alignItems: "center", color: "black" }}
          >
            <span>&larr;</span> Back to 
            {filter ? ` the ${filter} category` : " all products"}
          </Link>
          <div className="selected-product" >
            <img
              src={`/${product.img}`}
              className='product--img'
              style={{ borderRadius: ".5rem" }}
            />
            <div className="content" style={{ color: "black" }}>
              <p className='product--name'>{product.name}</p>
              <p className='price'>Price: R {product.price}</p>
              <button className='btn--cart' onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      </>
    )

  }

  return (
    <React.Suspense fallback={<h1 style={{ margin: "5em",textAlign:"center" }}>Loading...</h1>}>
      <Await resolve={dataPromise.product}>
        {(product) => renderProductDetail(product)}
      </Await>
    </React.Suspense>

  )
}