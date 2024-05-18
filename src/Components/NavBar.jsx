import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6"
import {getItemsOnCart,getBackgroundImg} from '../../api'

export default function NavBar({children}) {
  const [count, setCount] = React.useState(0)

 React.useEffect(()=>{
    async function fetchData(){
      const items = await getItemsOnCart();
      let totalCount = items.reduce((sum, item)=> sum + item.count , 0)
      setCount(totalCount.length)
    }
    fetchData();
  },[count])

  
  return (
    <nav>
      <div className="container">
        <img
          src={getBackgroundImg(0)}
          className="site-logo" />
      </div>

      <NavLink
        to="/"
        style={({ isActive }) => isActive && activeStyle || null}
      >
        Home
      </NavLink>
      <NavLink to="about"
        style={({ isActive }) => isActive && activeStyle || null}
      >
        About
      </NavLink>
      <NavLink
        to="products"
        style={({ isActive }) => isActive && activeStyle || null}
      >
        Products
      </NavLink>
      
      <div
        className="div-cart-icon"
        style={{ display: "flex", alignItems:"baseline"}}
      >
        <Link
          to="/on-cart"
          id="on-cart"
          style={{font: "bold 0.5rem Helvetica",color: "white",height: "max-content",margin:"0"}}
          className="items-count"
        >
          <FaCartShopping style={cartStyle} />
        </Link>
        {count && <span 
            className="count" 
            style={{
              margin:"1em 0 0"
            }}
            >
            {count}
          </span>
        }

      </div>
    </nav>
  )
}

const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline"
}
const cartStyle={
  color: "white",
  fontSize: "1.7rem",
  fontWeight: "bold",
  textDecoration: "none",
  padding: "0px 5px"
}
