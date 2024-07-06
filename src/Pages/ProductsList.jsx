import React from 'react'
import {useLoaderData} from "react-router-dom"
import { FaTrashCan } from "react-icons/fa6"
import {getCartItems, updateCount, removeProduct} from "../../api"

export async function loader(){
	const cartItems = await getCartItems()
	return cartItems || null
}

export default function ProductsList() {

	const products = useLoaderData()

	const containerStyle = {
		display: products && "flex" || "none",
		alignItems: "flex-end",
		flexWrap: "nowrap",
		marginBottom: "0px"
	}

	return (
		<>
			{!products ?
				<h1 style={{ margin: "5em auto",textAlign:"center" }}>
					Your cart is empty!
				</h1>
				:
				products.map((product) => product.count && (
					<div key={product.id} className="display-products" style={containerStyle}>
						<img src={product.imgUrl} alt={product.name} className="product--img"/>
						<div className="content">
							<p className="product--name" style={{textAlign: "start", margin: "0", fontSize: "2rem"}}>  
								{product.name}
							</p>
							<p className="price" style={{ textAlign: "start", margin: "0", fontSize: "2rem" }}>
								R {product.price}
							</p>
							<form 
								className='flex' 
								style={{gap:".5em"}}
								onSubmit={(e)=>{
									e.preventDefault()
									const {id, value} = e.target
									updateCount(id, Number(value))
									.then(()=>product.count = Number(value))
									.catch(err => console.error(err))
								}} 
							>
								<input 
									type="number" 
									id={product.id}
									name={product.name + "-count"}
									value={product.count} 
								/> 
								<i 
									id={product.id} 
									onClick={async ()=>{
										return await removeProduct(product.id)}
									}
								>
									<FaTrashCan />
								</i>
							</form>
						</div>
					</div>
				))
			}		
		</>
	)
}
