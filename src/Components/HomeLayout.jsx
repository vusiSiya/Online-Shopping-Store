import React from "react"
import  {Outlet}  from "react-router-dom"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

export default function HomeLayout(props){

  const [count, setCount] = React.useState(0)

  function handleClick(id) {
    setCount(prevCount => prevCount + 1)
  }
  return(
     <>
       <header>
         <NavBar count={count}/>
       </header>
       <main>
        <div className="products--parent">
          <Outlet handeClick={handleClick} />
        </div>
      </main>
      <Footer/>
    </>
  )
}
