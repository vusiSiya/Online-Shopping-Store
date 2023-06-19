import React from 'react'
import Items from '../Components/Items'
import data from '../Data'

export default function Women(props) {
    const [clothesData, setClothesData] = React.useState([])

    React.useEffect(()=>{
    console.log("Effect Ran")
    setClothesData(data.girls)
    
    }, [])
  
    //console.log(clothesData)
    const clothes = clothesData.map(item => {
    return <Items
        key={item.id}
        product={item}
        handleClick={item => props.handleClick(item.id)}
        />
    })
    return (
        <>
            <h3 className='slogan'>Women</h3>
            <div className="products--parent">
                {clothes}
            </div>
        </>
        )
    }