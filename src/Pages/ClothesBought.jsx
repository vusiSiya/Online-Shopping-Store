import React from 'react'
import {useParams} from "react-router-dom"
import data from '../Data'

export default function clothesBought(props) {
	const {clothesBought, setclothesBought} = React.useState(localStorage.getItem(`key=IDs`))

	const clothesOnCart = clothesBought.map( item =>{
		return(
			<div class="item-tile">
				<img src={item.img}
				<p class="product-name">{item.name}</p>
				<p class="price">{item.price}</p>
			</div>
		)
	})
	return(
		<>
			<h1>On Cart</h1>
			{clothesOnCart}
		</>
	)
}