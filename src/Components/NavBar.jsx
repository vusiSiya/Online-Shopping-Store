import React from 'react'

export default function NavBar() {
  return (
    <ul className="navBar">
      <li className='storeName'>Sukuma Mzansi</li>
      <li>
        <a href='./Items_Pages/Watches'>Watches</a>
      </li>
      <li>
        <a href="./Items_Pages/Computers" >Computers</a>
      </li>
      <li>
        <a href="./Items_Pages/Fashion">Fashion</a>
      </li>
    </ul>
  )
}