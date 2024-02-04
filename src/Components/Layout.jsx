import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import {getItemsOnCart} from '../../api'

const CartContext = React.createContext();
export { CartContext }

export default function Layout() {

  //const [productsList, setProductsList] = React.useState([]);
  
  const getItemId =(event)=> Number(event.target.id);
  
  function addToCart(event) {  
    const addedItem = data.products.find(product=>product.id === getItemId(event));
    addedItem.count++;
    //setProductsList([addedItem, ...prevProducts]);
  }

  return (
    <CartContext.Provider value={ addToCart}>
      <div className="layout-container">
        <header>
          <NavBar>
            {()=>{
              let count = 0
              async function getCount(){
                const items = await getItemsOnCart();
                return items.length 
              }
              return getCount() || 0
            }}
          </NavBar>
        </header>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartContext.Provider>
  )
}
