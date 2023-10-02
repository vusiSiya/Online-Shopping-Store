import React from "react"
import {Link, useRouteError} from "react-router-dom"
export default function ErrorElement(){
  const error = useRouteError()

  const homeLink = (
    <Link to="/" 
      className="link-btn" 
      style={{backgroundColor:"black"}}>
      home page
    </Link>
  )
  
  const sectionStyle={
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      textAlign: "center",
  }
  
  return (
    <section style={sectionStyle}>
      <h1>Oops! An error occured!</h1>
      <pre>{error.message}</pre>
      <h3>
        Click the button to navigate to the {homeLink}
      </h3>
    </section>
  )
}
