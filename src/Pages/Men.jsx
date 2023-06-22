import React from 'react'
import Items from '../Components/Items'
import data from '../Data'

export default function Men(props) {
    const [clothesData, setClothesData] = React.useState([])
    React.useEffect( ()=> {
    setClothesData(data.guys)
    }, []) 
    //console.log(clothesData)
    const clothes = clothesData.map(item => {
        return <Items
            key={item.id}
            product={product}
            handleClick={product => props.handleClick(product.id)}
        />
    })
    return (
        <>
            {clothes}
        </>
    )
}