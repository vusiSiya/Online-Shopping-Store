import React from 'react'
import Items from '../Components/Items'
import data from '../Data'
import { useSearchParams } from "react-router-dom"


export default function About() {
  const aboutStyle = {
    color: "black"
  }
  return (
    <>
      <h3 style={aboutStyle}>Hello this is the about page</h3>
    </>
  )
}