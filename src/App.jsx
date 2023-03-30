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
      <h3 className='slogan'>Look the part</h3>
      <ul className="products--parent">{products}</ul>
      <Footer />
    </main>
  )
}
