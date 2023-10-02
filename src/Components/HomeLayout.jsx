import React from "react"
import  {Outlet}  from "react-router-dom"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'


const CartContext = React.createContext();
export {CartContext}

export default function HomeLayout(){
  
  const [productsList, setProductsList] = React.useState([]); 

  function addToCard(product){
    setProductsList(prevProducts => [...prevProducts, product]);
  }

  function removeProduct(_id) {
    
    if (id) {
      const matchingProducts = productsList.filter(product => product.id === _id);
      matchingProducts.pop(matchingProducts[0]);
      
      setProductsList(prevProducts => [...matchingProducts, ...prevProducts]);    
    }
  }

  
  return(
    <CartContext.Provide value={{addToCard, removeProduct, productsList}}>
       <header>
         <NavBar productsList={productsList}/>
       </header>
       <main>
          <Outlet />
      </main>
      <Footer/>
    </CartContext.Provide>
  )
}
