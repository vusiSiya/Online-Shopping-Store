import React from 'react'
import {useLoaderData} from "react-router-dom"
import { FaTrashCan } from "react-icons/fa6"
import {getCartItems, updateCount} from "../../api"


export async function loader(){
	const cartItems = await getCartItems()
	return cartItems
}

export default function ProductsList() {

	const products = useLoaderData()
	
	const containerStyle = {
		display: products.length ? "flex" : "none",
		alignItems: "flex-end",
		flexWrap: "nowrap",
		marginBottom: "0px"
	}

	function handleChange({value, id}) {
		const item = products.find(item => item.id === Number(id))
		item.count = Number(value)
		updateCount(id, item.count)
		.then(()=>console.log("updated"))
		.catch(err =>console.error(err))
	}


	return (
		<>
			{!products.length ?
				<h1 style={{ margin: "5em auto",textAlign:"center" }}>Your cart is empty!</h1>
				:
				products.map(product => product.count && (
					<div key={product.id} className="display-products" style={containerStyle}>
						<img src={product.imgUrl} alt={product.name} className="product--img"/>
						<div className="content">
							<p 
								className="product--name" 
								style={{textAlign: "start", margin: "0", fontSize: "2rem"}}
							>  
								{product.name}
							</p>
							<p
								className="price"
								style={{ textAlign: "start", margin: "0", fontSize: "2rem" }}
							>
								R {product.price}
							</p>
							<div>
								<input 
									onChange={async(e)=> await handleChange(e)} 
									id={product.id} 
									type="number" 
									value={product.count}
								/> 
								<button
									className="btn--cart"
									onClick={(e)=>products.find(item => item.id ===e.target.id).count = 0}>
									Remove
								</button>
								<FaTrashCan onClick={()=>console.log("del")}/>
							</div>
						</div>
					</div>
				))
			}		
		</>
	)
}
