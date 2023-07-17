import React from 'react'
import Items from '../Components/Items'
import data from '../Data'

export default function Women(props) {
  const [clothesData, setClothesData] = React.useState([])

  React.useEffect(() => {
    console.log("Effect Ran")
    setClothesData(data.girls)
  }, [])

  //console.log(clothesData)
  const clothes = clothesData.map(item => {
    return <Items
      key={product.id}
      product={product}
      handleClick={(e)=>props.handleClick(e)}
    />
  })
  return (
    <>
      {clothes}
    </>
  )
}