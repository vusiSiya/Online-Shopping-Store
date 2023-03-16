import './App.css'
import NavBar from './Components/NavBar'
import Items from './Components/Items'
import Footer from './Components/Footer'
import choices from './Choices'

export default function App() {
  const products = choices.map((item) => {
    return <Items
      product={item}
    />
  })
  console.log(products)
  return (
    <main>
      <NavBar />
      {products}
      <Footer />
    </main>
  )
}
