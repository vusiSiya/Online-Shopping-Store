import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <p className='p--footer'>© {currentYear} Siyabonga Mahlalela</p>
    </footer>
  )
}