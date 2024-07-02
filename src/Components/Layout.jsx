import React from "react"
import { Outlet, NavLink, Link  } from "react-router-dom"

import { FaCartShopping, FaGithub  } from "react-icons/fa6"
import {getTotalCount} from '../../api'

import siteLogo from "../Images/background/site_logo.png";

export default function Layout() {

  const [count, setCount] = React.useState(null)

  React.useEffect(()=>{
    getTotalCount()
    .then(data => setCount(data))
  }, [count])


  return (
      <>
        <header>
          <nav>
            <div style={{width:"8rem"}}>
              <img src={siteLogo} className="site-logo" />
            </div>

            <NavLink 
              to="/" 
              style={({ isActive }) => isActive && activeStyle || null}>
              Home
            </NavLink>

            <NavLink 
              to="about" 
              style={({ isActive }) => isActive && activeStyle || null}>
              About
            </NavLink>

            <NavLink 
              to="products" 
              style={({ isActive }) => isActive && activeStyle || null}>
              Products
            </NavLink>
            
            <div 
              className="div-cart-icon" 
              style={{ display: "flex", alignItems:"baseline"}}>
              <Link
                to="/on-cart"
                id="on-cart"
                style={{font: "bold 0.5rem Helvetica",color: "white",height: "max-content",margin:"0"}}
                className="items-count"
              >
                <FaCartShopping style={cartStyle} />
              </Link>
              <span className="count">{count || 0}</span>

            </div>
          </nav>
        </header>
        <main>

          <Outlet />

        </main>
        <footer style={{position:"fixed", bottom:"0", right:"0", left:"0", zIndex:"-1"}}> 
          <p>© {new Date().getFullYear()} Siyabonga Mahlalela</p>
          <FaGithub />
        </footer>
      </>
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
