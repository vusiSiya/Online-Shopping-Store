import React from 'react'
import { NavLink, useOutletContext, useParams } from 'react-router-dom'

export default function NavBar(props) {
  const countStyle = {
    fontSize: "0.4em",
    color: "white",
    fontFamily: "helvetica",
    fontWeight: "bold"
  }
  const activeStyle = { 
    fontWeight: "bold",
    textDecoration: "underline"
}
  return (
    <nav>
      <div className="container">
        <img src="src/Images/background/site-logo-2.png" className="site-logo" />
      </div>
      <NavLink
        id="on-cart"
        className="items-count"
        to="on-cart"
        style={({isActive}) => isActive && activeStyle || null}
      >
      Cart
      <p id="count" style={{ countStyle }}>{props.count}</p>
      </NavLink>
      <NavLink to="about"
        style={({isActive}) => isActive && activeStyle || null}
        >About</NavLink>
      <NavLink 
        to="products"
        style={({isActive}) => isActive && activeStyle || null}
        >Products</NavLink>
    </nav>
  )
}
