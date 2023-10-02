import React from 'react'

export default function Home() {
    

  return (
      <section style={{
        display: "grid",
        gridtemplateColumns: "repeat(8, 1fr)",
        gridTemplateRows:"repeat(5, auto)",
        textAlign: "center",
        color: "white",
        font: "3.2rem BEll MT";}}
      >
        <img src="./background/site-logo-2.png" alt="site logo" class="home-bg-img" 
          style={{
          position: "relative",
          zIindex:"0",
          width:"100%",
          gridColumn: "1/-1",
          gridRow: "1/-1",
          height: "100%",
          opacity: "20%",}}
          >
          <h2 style={{
            gridoColumn: "2/-2",
            gridRow: "2/auto",
            zIndex: 1,
            fontWeight: "normal",
            margin: ".3em 0 .5em",}}
            >
              Celebrate your culture, 
            <br>with<br>
            <span style={{margin: "2em 0 0"}}> the best traditional attires on the market!</span>
          </h2>
            <p 
              style={{
                gridArea: 3/1/3/-1,
                zIndex: 1,
                margin: "1.5em  0",
                fontWeight: "bold",
                fontSize: "2rem"}}
            >
              Show off your South Africanacity, buve bakho!
          </p>
          <button
            type="button"
            id="get-your-best-attire"
            style={{zIndex: 1,
              backgroundColor: "grey",
              border: "1px solid white",
              borderRadius: ".5rem",
              fontSize: "1.5rem",
              color: "white",
              fontWeight: "bold",
              width: "max-content",
              height: "max-content",
              gridColumn: "4/6",
              gridRow: "4/5",
              padding: ".5em",
              marginBottom: "1em"}
            }
            >Get your best attire
          </button>
        </section>
    )
}
  