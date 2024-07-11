import React from 'react'
import {
	Link,
	useLoaderData,
	useLocation,
	useOutletContext } from "react-router-dom"
	
import {
	getSingleItem,
	getSingleCartItem,
	getTotalCount,
	addToCart,
	updateCount,
	removeProduct } from '../../api'

import { FaSpinner } from 'react-icons/fa6'
import UpdateCartButtons from '../Components/updateCartButtons'


export async function loader({ params }) {
	const cartItem = await getSingleCartItem(params.id) 
	return cartItem || await getSingleItem(params.id)
}

export default function ProductDetail() {

	const product = useLoaderData();
	const [itemCount, setItemCount] = React.useState(product?.count || 0)
	const [count, setCount] = useOutletContext(); // global count of items on cart

	const location = useLocation();
	const searchParams = new URLSearchParams(location.state.search);
	const filter = searchParams.get("category");

    React.useEffect(()=>{
        getTotalCount()
        .then(data =>setCount(data))
    }, [itemCount])

	async function handleChange(e){
		let newCount = Number(e.target.value)
		await updateCount(product.id, newCount)
		setItemCount(newCount)
	}

	async function handleClick(e){
		let newCount = (e.target.id === "plus") ?  itemCount + 1 : itemCount - 1
		await updateCount(product.id, newCount)
		setItemCount(newCount)
	}

	return (
		<section className='product details'>
			<Link
				to={`..${location.state.search || ""}`}
				relative="path"
				style={{ margin: "0em", display: "flex", alignItems: "center", color: "black",fontSize: "1.5rem"}}
			>
				<span>&larr;</span> Back to {filter && `the ${filter} category` || "all products"}
			</Link>

			<React.Suspense fallback={<FaSpinner/>}>
				<div className="selected-product" >
					<img
						src={`/${product.imgUrl}`}
						alt={product.name}
						className='product--img'
						style={{boxShadow: "0px 0px 10px 0px grey", borderRadius: ".5rem" }}
					/>
					<div className="content" style={{ color: "black" }}>
						<p className='product--name' style={{ fontSize: "2.1rem"}}>
							{product.name}
						</p>
						<p className='price' style={{ fontSize: "1.8rem", margin:"0 auto .8em"}}>
							Price: R {product.price}
						</p>
					 	<UpdateCartButtons
							id={product.id}
							itemCount={itemCount}
							handleChange={handleChange}
							handleClick={handleClick}	
							addItem={async ()=>{
								await addToCart(product.id)
								setItemCount(1)
							}}
							removeItem={async ()=>{
								await removeProduct(product.id)
								setItemCount(0)
							}}
						/>
					</div>
				</div>
			</React.Suspense>
		</section>
	)
}