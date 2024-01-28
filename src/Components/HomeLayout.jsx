import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const CartContext = React.createContext();
export { CartContext }

export default function HomeLayout() {

  const [productsList, setProductsList] = React.useState([]);
  
  function addToCart(product) {  
    setProductsList(prevProducts => {
      return [...prevProducts,{...product, count: 0} ];
    });
  }

  function removeProduct(_id) {
      setProductsList(prevList => prevList.filter(product =>product.id != _id));     
  }

  return (
    <CartContext.Provider value={{ addToCart, removeProduct, productsList, setProductsList }}>
      <header>
        <NavBar productsCount={productsList.length} />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartContext.Provider>
  )
}
