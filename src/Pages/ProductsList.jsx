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
	const [data, setData] = React.useState(products || [])


	const containerStyle = {
		display: products && "flex" || "none",
		alignItems: "flex-end",
		flexWrap: "nowrap",
		marginBottom: "0px"
	}

	function handleInput({value, id}) {
		const product = products.find(product => product.id === Number(id))
		product.count = Number(value)
		updateCount(id, product.count)
		.then(()=>{
			const newArray = products.map(item =>{
				if(item.id === Number(id)){
					item.count = Number(product.count)
				}
				return item
			})
			setData(newArray)
			console.log(products, data)
		})
		.catch(err =>console.error(err))
	}

	function handleClick({id}) {
		removeProduct(id)
		.then((items)=>{
			setData(items)
			console.log()
		})
		.catch(err =>console.error(err))
	}

	return (
		<>
			{data.length === 0 ?
				<h1 style={{ margin: "5em auto",textAlign:"center" }}>Your cart is empty!</h1>
				:
				data.map((product) => product.count && (
					<div key={product.id} className="display-products" style={containerStyle}>
						<img src={product.imgUrl} alt={product.name} className="product--img"/>
						<div className="content">
							<p className="product--name" style={{textAlign: "start", margin: "0", fontSize: "2rem"}}>  
								{product.name}
							</p>
							<p className="price" style={{ textAlign: "start", margin: "0", fontSize: "2rem" }}>
								R {product.price}
							</p>
							<div className='flex gap-4'>
								<input 
									type="number" 
									id={product.id} 
									value={product.count}
									onInput={(event)=>handleInput(event.target)} 
								/> 
								<i id={product.id} onClick={(event)=>handleClick(event.currentTarget)}>
									<FaTrashCan />
								</i>
							</div>
						</div>
					</div>
				))
			}		
		</>
	)
}
