import React from 'react'
import {useParams} from "react-router-dom"
import data from '../Data'

export default function ClothingDetail(props) {
	const params = useParams();
	const {item, setItem} = React.useState()
	React.useEffect(()=>{
		setItem(params.id);
	},[])
	const styling={
		margin: "auto",
		padding: "0.5em",
		color: "black",
		fontSize: "1rem",
		borderRadius: "0.5rem",
	}
  if (!item) {
    return <h3>Loading...</h3>
  }
	return(
		<div style={{styling}} id={item.id} class='product details'>
			<div class="selected-product">
				<img src={item.img} class='product--img' />
				<div class="content">
					<p id="details" class='product--name'>{item.name}</p>
					<p id="details" class='price'>Price: R {item.price}</p>
					<button id={item.id} class='btn--cart'>
						Add to Cart
					</button>
				</div>
			</div>
			<section class = "description">
				<h4>Details</h4>
				<p class="description">
					lorem ipsum ipsum lorem ipusm lorem
					ipsum ipsum lorem ipusm<br/>
					lorem ipsum ipsum lorem ipusm lorem ipsum ipsum lorem<br/>ipusm
					lorem ipsum ipsum lorem ipusm lorem ipsum ipsum lorem ipusm<br/>			
				</p>
			</section>
		</div>
	)
}