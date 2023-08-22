
import React from 'react'
import { useSearchParams } from "react-router-dom"


export default function About() {
  const aboutStyle = {
    color: "black",
    textAlign: "center"
  }
  return (
    <>
      <h3 style={{ aboutStyle }}>Hello this is the about page</h3>
    </>
  )
}