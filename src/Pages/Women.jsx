import React from 'react'
import Items from '../Components/Items'
import data from '../Data'

export default function Women(props) {
  const [clothesData, setClothesData] = React.useState([])

  React.useEffect(() => {
    setClothesData(data.girls)
  }, [])

  const clothes = clothesData.map(item => {
    return <Items
      key={product.id}
      product={product}
    />
  })
  return (
    <>
      {clothes}
    </>
  )
}