import React from 'react'
import { Link } from "react-router-dom"
export default function Home() {
return (
<>
<section
style={{
backgroundColor: " #99918042",
display: "grid",
padding: ".5em",
gridTemplateRows: "repeat(10, auto)",
gridTemplateColumns: "repeat(8,1fr)",
textAlign: "center",
color: "white",
font: "3.2rem Maven Pro",
gap:"1em"
}}
>
<img 
src="src/Images/background/site-logo-2.png" 
alt="site logo" className="home-bg-img"
style={{
position: "relative",
zIindex: "0",
width: "100%",
gridColumn: "1/-1",
gridRow: "1/-1",
height: "100%",
opacity: "25%",
}}
/>
<h2
style={{
gridColumn: "2/-2",
gridRow: "2/auto",
zIndex: 1,
fontWeight: "normal",
margin: ".3em 0 .5em"
}}
>
Celebrate your culture, 
<br/> with the best attires, on the market!
</h2>
<p
style={{
gridArea: "6 / 1 / 7 / -1",
zIndex: 1,
margin: "1.5em  0",
fontWeight: "bold",
fontSize: "2rem"
}}
>
Show off your South Africanacity!
</p>
<Link
        to="/products"
        id="get-your-best-attire"
style={{
        zIndex: 1,
        backgroundColor: "grey",
        border: "1px solid white",
        borderRadius: ".5rem",
        fontSize: "1.5rem",
        color: "white",
        fontWeight: "bold",
        width: "max-content",
        height: "max-content",
        gridArea: "7/4/8/-1",
        padding: ".5em",
        marginBottom: "1em"
}}
>Get your best attire
</Link>
</section>
</>
)
}
