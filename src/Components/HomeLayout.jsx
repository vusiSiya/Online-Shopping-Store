import React from "react"
import  {Outlet}  from "react-router-dom"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import data from '../Data'
export default function HomeLayout(){

  const [count, setCount] = React.useState(0)
  const [itemsBought, setItemsBought]= React.useState()
  function handleClick(event) {
    const {id} = event.target;
    setCount(prevCount => prevCount + 1)
    //localStorage.setItem(`${data}`)
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
