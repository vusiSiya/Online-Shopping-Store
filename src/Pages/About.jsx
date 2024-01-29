import React from 'react'
import {
  Link,
  useLoaderData,
  Await,
  defer
} from "react-router-dom";
import { getBackgroundImg } from "../../api"

export async function loader() {
  return defer({ imgUrl: getBackgroundImg(0) })
}
export default function About() {

  const imgUrlPromise = useLoaderData();
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
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <section style={sectionStyle}>
        <Await resolve={imgUrlPromise.imgUrl}>
          {(imgUrl) =>(
              <>
                <img src={`/${imgUrl}`} alt="BaSotho traditional hat" style={imgStyle}/>
                <div>
                  <h2>Looking for traditional South African Clothing ?</h2>
                  <h3>You've come to the right place!</h3>
                </div>
              </>)
          }
        </Await>
        <p>We have attires from a variety of South African cultures!!</p>
        <Link to="/products" className="link-btn">Have a look at our products</Link>
      </section>
    </React.Suspense>
  )

}
