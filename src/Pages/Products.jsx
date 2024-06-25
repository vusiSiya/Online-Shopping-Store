import React from 'react'
import {
	useLoaderData,
	useSearchParams,
	defer,
	Await
} from "react-router-dom"; 
import Items from '../Components/Items';
import getProducts from "../../api";

export async function loader() {
	const data = await getProducts() 
	return data
}

export default function Products() {

	const products = useLoaderData();
	const [searchParams, setSearchParams] = useSearchParams();
	const categoryFilter = searchParams.get("category");

	function getItems(){
		const getRandomNum = (max)=>Number((Math.random() * max ).toFixed()) + 1;

		const randomItemsArray = products.map(el=>{
			let randomNum = getRandomNum(products.length || 1)
			const randomItem = products.find(item=>item.id === randomNum);	
			return randomItem;
		}).filter(el=>el)
		
		const nonRepeatingItems = randomItemsArray.map((item)=>{
			const matchingItems = randomItemsArray.filter(el=> el.id === item?.id)
			const isNotRepeating = (matchingItems.length === 1);
			return isNotRepeating && item || null;
		}).filter(item=>item)

		return (categoryFilter ?
			products.filter((item) => item.category === categoryFilter)
			:
			nonRepeatingItems.slice(0, 8)
		);
	}

	
	return (
		<>
			<section className="filters">
				<button
					type="button"
					className="filter"
					onClick={() => setSearchParams({ category: "women" })}
				>
					women
				</button>
				<button
					type="button"
					className="filter"
					onClick={() => setSearchParams({ category: "men" })}
				>
					men
				</button>
				<button
					type="button"
					className="filter"
					onClick={() => setSearchParams({ category: "watches" })}
				>
					watches
				</button>
				{categoryFilter &&
					(<button type="button" className="filter" onClick={() => setSearchParams({})}>
						view all
					</button>)
				}
			</section>
			<React.Suspense fallback={<h2>Loading products...</h2>}>
				<section className="display-products">
					{getItems().map(product => (
						<Items
							key={product?.id}
							product={product}
							linkState={{ search: `?${searchParams.toString()}` }}
						/>))
					}
				</section>
			</React.Suspense>
		</>
	)

}	