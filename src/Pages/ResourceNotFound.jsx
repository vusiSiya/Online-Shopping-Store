import React from "react"

export default function ResourceNotFound(){
  const error = useRouteError()
  return (
    <>
      <h3 style={{margin: "5em",textAlign:"center" }}>{error.status} Page Not found!</h3>
    </>
  )
}