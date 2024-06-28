import React from 'react'
import {
  Link
} from "react-router-dom";
import khaebana from "../Images/background/khaebana.png"
import { FaSpinner } from 'react-icons/fa6';

export default function About() {

  const sectionStyle = {
    color: "black",
    textAlign: "center",
    display: "grid",
    gridRowGap: "0.5em",
    fontSize: "1.5rem",
    gridTemplateRows: "repeat(10, auto)",
    gridTemplateColumns: "repeat(16, 1fr)",
    alignItems: "center",
  }
  const imgStyle = {
    zIndex: "0",
    gridColumn: "1/-1",
    gridRow: "1/3",
    width: "100%",
    height: "fit-content",
    opacity: "90%"
  }

  return (
      <React.Suspense fallback={<FaSpinner/>}>
        <section style={sectionStyle}>
          <img src={khaebana} alt="khaebana" style={imgStyle}/>
          <div>
            <h2>Looking for traditional South African Clothing ?</h2>
            <h3>You've come to the right place!</h3>
          </div>
          <p>We have attires from a variety of South African cultures!!</p>
          <Link to="/products" className="link-btn">Have a look at our products</Link>
        </section>
      </React.Suspense>
  )

}
