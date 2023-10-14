import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const CartContext = React.createContext();
export { CartContext }

export default function HomeLayout() {

  const [productsList, setProductsList] = React.useState([]);

  
  function addToCart(product) {  
    setProductsList(prevProducts => [...prevProducts, product]);
  }

  function removeProduct(_id) {
    if (_id) {
      const nonMatchingProducts = productsList.filter(product =>{
        return product.id != _id
      })
      
      const matchingProducts = productsList.filter(product =>{
        return product.id === _id
      });
      
      let firstElement = matchingProducts[0];
      matchingProducts.pop(firstElement);
      
      setProductsList([...matchingProducts, ...nonMatchingProducts]);     
    }
  }


  return (
    <CartContext.Provider value={{ addToCart, removeProduct, productsList }}>
      <NavBar productsCount={productsList.length} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartContext.Provider>
  )
}
