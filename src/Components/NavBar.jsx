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
        <p 
          style="font: 0.5rem white helvetica;font-weight: bold;"
          className="items-count">
          Cart
          <span id="count">{props.count}</span>
        </p>
      <div className="pages">
              <NavLink 
                to="."
                end
                style={()=>isActive ? activeStyle : null}  
              >
                Home
              </NavLink>
              <NavLink 
                to="men"
                style={()=>isActive ? activeStyle : null}  
              >
                Men
              </NavLink>
              <NavLink 
                to="woman"
                style={()=>isActive ? activeStyle : null}  
              >
                Women
              </NavLink>
              <NavLink 
                to="watches"
                style={()=>isActive ? activeStyle : null}  
              >
                Watches
              </NavLink>
      </div>
    </nav>
  )
}