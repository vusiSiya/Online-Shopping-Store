import React from 'react'
import {Outlet} from "react-router-dom"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Items from '../Components/Items'
import data from '../Data'
import { BrowserRouter, Routes, Route, Link, useSearchParams } from "react-router-dom"

export default function Home(props) {
  const [products, setProducts] = React.useState([]);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  
  React.useEffect(()=>{
    setProducts(data);
    /*
    With Mirage JS I would make this API call instead:
    fetch("/api/products").then( res => res.json()).then( _data => setProducts(_data))
    */
  }, [products]);
  
  const getRandomProducts = products.map( (product,i) => {
    let randomNum = Math.floor(Math.random() * products.length) + 1;
    if(i > 9){
      return;
    }
    return products[randomNum] : 
  });

 const selectedProductsData = categoryFilter 
   ? products.filter( item => item.category === categoryFilter) 
   : getRandomProducts;
  
  const selectedProducts = selectedProductsData.map( product =>{
    return <Items 
      key = {product.id}
      product = {product}
    />
  })
      const [count, setCount]  = useOutletContext();
      const params = useParams();
      const activeStyle ={
      fontWeight: "bold",
      textDecoration: "underline",
      }
      const countStyle={
      font: "0.5rem white helvetica",
      fontWeight: "bold"
      }
  return (
    <>
        <nav>  
          <div className="filters">
            <button
              onClick={setSearchParams(categoryFilter)}
              style={()=>isActive ? activeStyle : null}  
              >
              Home
            </button>
            <button 
              onClick={setSearchParams(categoryFilter)}
              style={()=>isActive ? activeStyle : null}  
              >
              Men
            </button>
            <button 
              onClick={setSearchParams(categoryFilter)}
              style={()=>isActive ? activeStyle : null}  
              >
              Women
            </button>
            <button 
              onClick={setSearchParams(categoryFilter)}
              style={()=>isActive ? activeStyle : null}  
              >
              Watches
            </button>
            <div className="div-cart-icon" style={{display:none}}>
              <Link 
                id="on-cart"
                className="items-count"
                to=`${params.id}`        
              >
              Cart
            </Link>
          <p id="count" style={countStyle}>{count}</p>
        </div>
      </nav>
      <section className="display-products">
        {selectedProducts}
      </section>  
    </>
  )
}