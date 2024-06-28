import React from 'react'
import {
	Await,
	Link,
	useLoaderData,
	useLocation,
	defer
} from "react-router-dom"
import getProducts, { updateCount, addToCart, getSingleProduct} from '../../api'
import { FaSpinner, FaTrash } from 'react-icons/fa6'

export async function loader({ params }) {
	const product = await getSingleProduct(params.id)
	return product
}

export default function ProductDetail() {

	const product = useLoaderData();
	const [count, setCount] = React.useState(product.count || 0)

	const location = useLocation();
	const searchParams = new URLSearchParams(location.state.search);
	const filter = searchParams.get("category");

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
						src={"/"+product.imgUrl}
						alt={product.name}
						className='product--img'
						style={{boxShadow: "0px 0px 10px 0px grey", borderRadius: ".5rem" }}
					/>
					<div className="content" style={{ color: "black" }}>
						<p className='product--name' style={{ fontSize: "2.1rem"}}>
							{product.name}
						</p>
						<p className='price' style={{ fontSize: "1.8rem",margin:"0 auto .8em"}}>
							Price: R {product.price}
						</p>
						{(count < 3) ? ( 
							<button 
								className='btn--cart' 
								id={product.id} 
								onClick={async()=>{
									await addToCart(product.id)}
								}
							>
								Add to Cart
							</button>
							):  
							<div className='flex'>
								<input 
									type='number'
									id={product.id}
									value={count}
									onChange={(event)=>handleChange(event)}
								/>
								<FaTrash />
							</div>	 
						}
					</div>
				</div>
			</React.Suspense>

		</section>
	)
}