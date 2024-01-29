import React from 'react'
import {
	useLoaderData,
	useSearchParams,
	defer,
	Await
} from "react-router-dom"; 
import Items from '../Components/Items';
import getProductsData from "../../api";

export async function loader() {
	return defer({ products: getProductsData() })
}

export default function Products() {

	const dataPromise = useLoaderData();
	const [searchParams, setSearchParams] = useSearchParams();
	const categoryFilter = searchParams.get("category");
	
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
				<Await resolve={dataPromise.products}>
					{(products)=>renderProducts(products)}
				</Await>
			</React.Suspense>
		</>
	)
	
	function renderProducts(products){				
		return (
			<section className="display-products">
				{getItems().map(product => (
					<Items
						key={product?.id}
						product={product}
						linkState={{ search: `?${searchParams.toString()}` }}
					/>))
				}
			</section>
		)

		function getItems(){
			const getRandomNum = (max)=>Number((Math.random() * max ).toFixed()) + 1;

			const getRandomlySelectedItems = products.map(el=>{
				let randomNum = getRandomNum(products.length || 1)
				const randomItem = products.find(item=>item.id === randomNum);	
				return randomItem;
			}).filter(el=>el)
			
			return (categoryFilter ?
				products.filter((item) => item.category === categoryFilter)
				:
				getRandomlySelectedItems.map((item)=>{
					const hasNoMatchingItems = getRandomlySelectedItems.filter(el=> el.id === item?.id).length === 1;
					return hasNoMatchingItems && item || null;
				}).filter(item=>item).slice(0,8)
			);
		}

	}
	
}