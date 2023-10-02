import React from 'react'
import { Link, useLoaderData } from "react-router-dom"
import { getBackgroundImg } from "../../api"

export async function loader() {
  const imgUrl = await getBackgroundImg(0);
  return imgUrl;
}
export default function About() {
  const bgImgUrl = useLoaderData();
  const sectionStyle = {
    color: "black",
    textAlign: "center",
    display: "grid",
    gap: "0.5em",
    font: "1.5rem Helvetica, sans-serif",
    gridTemplateRows: "repeat(10, auto)",
    gridTemplateColumns: "repeat(16, 1fr)",
    alignItems: "center",
  }
  const imgStyle = {
    zIndex: "0",
    gridColumn: "1/-1",
    gridRow: "1/3",
    width: "100%",
    height: "max-content",
    opacity: "90%"
  }

  return (
    <>
      <section
        style={sectionStyle}
      >
        <img
          src={bgImgUrl}
          alt="BaSotho traditional hat"
          style={imgStyle}
        />
        <div>
          <h1>
            Looking for traditional South African Clothing ?
          </h1>
          <h3>You've come to the right place!</h3>
        </div>
        <p>
          We have attires from a variety of South African cultures!
        </p>
        <Link
          to="/products"
          className="link-btn"
        >
          Have a look at our products
        </Link>
      </section>
    </>
  )
}