import React from "react"
import  {Outlet}  from "react-router-dom"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import {useSearchParams} from "react-router-dom"
export default function HomeLayout(){
  
  function handleClick(e) {
    const {id} = e.target;
    setCount(prevCount => prevCount + 1)
    //localStorage.setItem(`${data}`)
  }
  return(
     <>
       <header>
         <NavBar />
       </header>
       <main>
          <Outlet />
      </main>
      <Footer/>
    </>
  )
}
