import React from 'react'
import {CartContext} from "../Components/HomeLayout"

export default function ProductsList(props) {

	const {productsList, removeProduct} = React.useContext(CartContext)
	return(
		<>
			{ productsList.map( product =>{
				return(
					<div className="product-tile">
						<img src={product.img}/>
						<p className="product-name">{product.name}</p>
						<p className="price">{product.price}</p>
						<button onClick={()=>removeProduct(product.id)}>Remove</button>
					</div>
				);
			})}
		</>
	)
}