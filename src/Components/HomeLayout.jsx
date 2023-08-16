import React from "react"
import  {Outlet}  from "react-router-dom"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import {useSearchParams} from "react-router-dom"
export default function HomeLayout(){

  const [count, setCount] = React.useState(0)
  const [itemsBought, setItemsBought]= React.useState();
  
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  
  function handleClick(e) {
    console.log(e)
    const {id} = e.target;
    setCount(prevCount => prevCount + 1)
    //localStorage.setItem(`${data}`)
  }
  return(
     <>
       <header>
         <NavBar context={[count, setCount]} filter={categoryFilter}/>
       </header>
       <main>
        <div className="products--parent">
          <Outlet context={[searchParams, setSearchParams]} filter={categoryFilter}/>
        </div>
      </main>
      <Footer/>
    </>
  )
}
