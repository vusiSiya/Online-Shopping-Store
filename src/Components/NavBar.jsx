import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navBar">
      <h3 className='storeName'>Logo Here</h3>
      <div className="pages">
              <Link to="/">🏠Home</Link>
              <Link to="/men">Men</Link>
              <Link to="/men">Women</Link>
      </div>
    </nav>
  )
}