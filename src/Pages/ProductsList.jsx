import React from 'react'
import { CartContext } from "../Components/Layout"
import {getItemsOnCart} from "../../api"
import {useLoaderData} from "react-router-dom"

export async function loader(){
	return getItemsOnCart();
}

export default function ProductsList() {
	//const { productsList, setProductsList, removeProduct } = React.useContext(CartContext);

	const products = useLoaderData();
	
	const containerStyle = {
		display: products.length ? "flex" : "none",
		alignItems: "flex-end",
		flexWrap: "nowrap",
		marginBottom: "0px"
	};

	function handleChange(event) {
		const {value, id} = event;
		const item = products.find(item => item.id === Number(id));
		item.count = Number(value);
		
		/*setProductsList(prevList => prevList.map(product =>{ 
			if (product.id === id) {
				return {...product, count: value};
			}
			return product;
		}));  
		*/
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
								style={{textAlign: "start",margin: "0",fontSize: "2rem"}}
							>  
								{product.name}
							</p>
							<p
								className="price"
								style={{ textAlign: "start", margin: "0",fontSize: "2rem" }}
							>
								R {product.price}
							</p>
							<div>
								<input 
									onChange={(e)=> handleChange(e)} 
									id={product.id} 
									type="number" 
									value={product.count}
								/> 
								<button className="btn--cart" onClick={(e)=>products.find(item => item.id ===e.target.id).count = 0}>
									Remove
								</button>
							</div>
						</div>
					</div>
				))
			}		
		</>
	)
}
