import React from 'react'
import { CartContext } from "../Components/HomeLayout"

export default function ProductsList() {
  const { productsList, setProductsList, removeProduct } = React.useContext(CartContext);
  const containerStyle = {
    display: productsList.length ? "flex" : "none",
    alignItems: "flex-end",
    flexWrap: "nowrap",
    marginBottom: "0px"
  };

  function handleChange(event) {
    const {value, id} = event;
    
    setProductsList(prevList => prevList.map(product =>{ 
      if (product.id === id) {
        return {...product, count: value};
      }
      return product;
    }));  
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
              <img 
                src={product.img} 
                className="product--img"
              />
              <div className="content">
                <p 
                  className="product--name" 
                  style={{textAlign: "start",margin: "0",fontSize: "2rem"}}>  
                  {product.name}
                </p>
                <p
                  className="price"
                  style={{ textAlign: "start", margin: "0",fontSize: "2rem" }}
                >
                  R {product.price}
                </p>
                <div>
                  { (product.count > 0) ?
                      <input 
                        onChange={(e)=> handleChange(e)} 
                        id={product.id} 
                        type="number" 
                        value={product.count}
                      /> 
                    :
                      <button 
                        onClick={()=> removeProduct(product.id)}
                        className="btn--cart"
                      >
                        Remove
                      </button>
                  }
                </div>
              </div>
            </div>
          );
        })
      }
      
    </>
  )
}