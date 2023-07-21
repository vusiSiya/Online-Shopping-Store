import React from 'react'
import {useParams} from "react-router-dom"
import data from '../Data'

export default function ClothingDetail(props) {
	const params = useParams();
	const {item, setItem} = React.useState(null)
	React.useEffect(()=>{
		setItem(params.id);
	},[])
	const style={
		margin: "auto",
		padding: "0.5em",
		color: "black",
		fontSize: "1rem",
		borderRadius: "0.5rem",
	}
	
	return(
		<div style= {{style}} class="item-details-tile">
			<div className="item" >
				<img src={item.img}/>
				<section className="content">
					<p className="name">{item.name}</p>
					<p className="price">{item.price}</p>
				</section>
				<button 
					className='Btn--cart'
					onClick={(e)=>props.handleClick(e)}
					>
					Add to Cart
				</button>
			</div>
			<section className = "description">
				<h1>Details</h1>
				<p class="description">
					lorem ipsum ipsum lorem ipusm lorem ipsum ipsum lorem ipusm
					lorem ipsum ipsum lorem ipusm lorem ipsum ipsum lorem ipusm
					lorem ipsum ipsum lorem ipusm lorem ipsum ipsum lorem ipusm
					lorem ipsum ipsum lorem ipusm lorem ipsum ipsum lorem ipusm	
				</p>
			</section>
		</div>
	)
}