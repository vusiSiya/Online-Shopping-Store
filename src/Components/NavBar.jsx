import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar(props) {
  const activeStyle ={
    fontWeight: "bold",
    textDecoration: "underline",
  }
  //const countStyle={}
  return (
    <nav className="navBar">
      <h3 className='storeName'>Logo Here</h3>
      props.count && 
        <p className="items-count">
          Cart
          <span id="count">{props.count}</span>
        </p>
      <div className="pages">
              <NavLink 
                to="/"
                end
                style={()=>isActive ? activeStyle : null}  
              >
                Home
              </NavLink>
              <NavLink 
                to="/men"
                style={()=>isActive ? activeStyle : null}  
              >
                Men
              </NavLink>
              <NavLink 
                to="/woman"
                style={()=>isActive ? activeStyle : null}  
              >
                Women
              </NavLink>
      </div>
    </nav>
  )
}