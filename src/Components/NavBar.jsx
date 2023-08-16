import React from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom'

export default function NavBar() {
  return(
    <nav>
      <div className="container">
        <img src="./background/site-logo-2.png" className="site-logo">
      </div>
      <Link to="about">About</Link>
    </nav>

)}
