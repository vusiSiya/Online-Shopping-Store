import React from 'react'

export default function Footer() {
  return (
    <footer>
      <p 
        className='p--footer'
      >
        © {new Date().getFullYear()}
         Siyabonga Mahlalela
      </p>
    </footer>
  )
}