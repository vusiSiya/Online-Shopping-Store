import './App.css'
import NavBar from './Components/NavBar'
import Items from './Components/Items'
import Footer from './Components/Footer'

export default function App() {
  return (
    <main>
      <NavBar />
      <p></p>
      <Items
        img =""
        name =""
        price =""
      />
      <Footer />
    </main>
  )
}
