import React from 'react'
import {useLoaderData, useOutletContext} from "react-router-dom"
import { FaTrashCan } from "react-icons/fa6"
import {getCartItems, updateCount, removeProduct} from "../../api"

export async function loader(){
	return await getCartItems()
}

export default function ProductsList() {

	const data = useLoaderData()
	const [products, setProducts] = React.useState(data || [])
	const [count, setCount] = useOutletContext()

	React.useEffect(()=>{
		if(products){
			const newCount = products?.reduce((sum, $)=> (sum + $.count), 0)
			setCount(newCount)
		}
	}, [products])

	async function handleChange(e){
		let newCount = Number(e.target.value)
		let id = Number(e.target.id)
		await updateCount(id, newCount)
		setProducts(prevItems => prevItems.map(item =>{
			if (item.id === id) {
				return {...item, count: newCount}
			}
			return item
		}))
	}


	return (
		<>
			{!products.length ?
				<h1 style={{ margin: "5em auto",textAlign:"center" }}>
					Your cart is empty!
				</h1>
			: products.map((product) => product?.count && (
				<div key={product.id} className="display-products" style={containerStyle}>
					<img src={product.imgUrl} alt={product.name} className="product--img"/>

					<div className="content">
						<p className="product--name" style={{textAlign: "start", margin: "0", fontSize: "2rem"}}>  
							{product.name}
						</p>
						<p className="price" style={{ textAlign: "start", margin: "0", fontSize: "2rem" }}>
							R {product.price}
						</p>

						<div style={{display:"flex", gap:".5em", justifyContent:"center", alignItems:"center"}}>
							<input
								style={{textAlign:"center"}}
								type='number'
								id={product.id}
								value={product.count}
								onChange={(e)=>handleChange(e)} 
							/>
							<button onClick={async ()=>{
								let id = product.id
								await removeProduct(id)
								const newArray = products.filter(item => item.id !== id)
								setProducts(newArray)
							}}>
								<FaTrashCan />
							</button>
						</div>
					</div>
				</div>
			))}		
		</>
	)
}

const containerStyle = {
	//display: products ? "flex" : "none",
	display: "flex",
	alignItems: "flex-end",
	flexWrap: "nowrap",
	marginBottom: "0px"
}