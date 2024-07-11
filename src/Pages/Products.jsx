import React from 'react'
import {
	useLoaderData,
	useSearchParams,
} from "react-router-dom"; 
import Items from '../Components/Items';
import FiltersSection from '../Components/FiltersSection';
import getProducts,{ getNonRepeatingItems } from "../../api";
import { FaSpinner } from 'react-icons/fa6';

export async function loader({request}) {
	const url = new URL(request.url);
	const filter = url.searchParams.get("category")
	const products = await getProducts()

	const getRandomNum = (max)=>Number((Math.random() * max ).toFixed()) + 1;
	const randomItemsArray = products.map(el=>{
		let randomNum = getRandomNum(products.length || 1)
		const randomItem = products.find(item=>item.id === randomNum);	
		return randomItem;
	}).filter(el=>el)

	const filteredItems = products.filter(item => item.category === filter)
	const newArray = getNonRepeatingItems(randomItemsArray);
	
	return filter ? filteredItems : newArray
}

export default function Products() {

	const products = useLoaderData();
	const [searchParams, setSearchParams] = useSearchParams();
	const filter = searchParams.get("category");

	return (
		<>
			<FiltersSection setSearchParams={setSearchParams} filter={filter} />
			<React.Suspense fallback={<FaSpinner />}>
				<section className="display-products">
					{products.map(product => (
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