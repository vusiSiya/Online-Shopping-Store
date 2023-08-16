import React from 'react'
import {useParams} from "react-router-dom"
import data from '../Data'

export default function ProductsList(props) {
	const {productsList, setProductsList} = React.useState(localStorage.getItem(`key=IDs`))

	const itemsOnCart = productsList.map( item =>{
		return(
			<div className="item-tile">
				<img src={item.img}
				<p className="product-name">{item.name}</p>
				<p className="price">{item.price}</p>
			</div>
		)
	})
	return(
		<>
			<h3>On Cart</h3>
			{itemsOnCart}
		</>
	)
}