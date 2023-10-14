import React from 'react'
import { CartContext } from "../Components/HomeLayout"

export default function ProductsList() {
  const { productsList, removeProduct } = React.useContext(CartContext);
  const containerStyle = {
    display: productsList.length ? "flex" : "none",
    alignItems: "flex-end",
    flexWrap: "nowrap"
  }
  return (
    <>
      {!productsList.length ?
        <h1 style={{ margin: "5em auto",textAlign:"center" }}>Your cart is empty!</h1>
        :
        productsList.map(product => {
          return (
            <div
              className="display-products"
              style={containerStyle}
            >
              <img src={product.img} className="product--img" />
              <div className="content">
                <p className="product-name">{product.name}</p>
                <p
                  className="price"
                  style={{ textAlign: "start", margin: "0" }}
                >
                  {product.price}
                </p>
                <button onClick={() => removeProduct(product.id)}>Remove</button>
              </div>
            </div>
          )
        })
      }
    </>
  )
}