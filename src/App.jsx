import './App.css'
import NavBar from './Components/NavBar'
import Items from './Components/Items'
import Footer from './Components/Footer'
import data from './data'

export default function App() {
  const products = data.map((item) =>{
    return <Items 
             product = {item}
            />
  })
  
  return (
    <main>
      <NavBar />
        {products}
      <Footer />
    </main>
  )
}
