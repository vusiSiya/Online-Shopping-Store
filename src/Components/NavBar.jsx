import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6"

export default function NavBar({ productsCount }) {
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
  return (
    <nav>
      <div className="container">
        <img
          src="/src/Images/background/site-logo-2.png"
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
          style={
            {font: "bold 0.5rem Helvetica",
             color: "white",
             height: "max-content",
             margin:"0" 
            }}
          className="items-count"
        >
          <FaCartShopping style={cartStyle} />
        </Link>
        <p 
          id="count" 
          style={{
            margin:"1em 0 0"
          }}
          >
          {productsCount}
        </p>

      </div>
    </nav>
  )
}
