import React from 'react'
import {
  useLoaderData,
  useSearchParams,

} from "react-router-dom"
import Items from '../Components/Items'
import getProductsData from "../../api"

export async function loader() {
  return getProductsData();
}
export default function Products() {
  const products = useLoaderData()
  
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  
  function getRandomProducts() {
    let newArray = []
    for (let i = 1; i <= 8; i++) {
      let randomNum = Math.floor(Math.random() * 17) + 1;
      newArray.push(products[i * 2]);
    }
    return newArray;
  };

 const selectedProductsData = categoryFilter 
    ? products.filter((item, i) => item.category === categoryFilter)
    : getRandomProducts();
  
  const selectedProducts = selectedProductsData.map(product => {
    return <Items 
      key={product?.id}
      product={product}
    />
  });

  return (
    <>
      <section className="filters">
            <button
          className="filter"
          onClick={() => setSearchParams({ category: "women" })}
              >
          women
            </button>
            <button 
          className="filter"
          onClick={() => setSearchParams({ category: "men" })}
              >
          men
            </button>
            <button 
          className="filter"
          onClick={() => setSearchParams({ category: "watches" })}

              >
          watches
            </button>
        {categoryFilter &&
            <button 
            className="filter"
            onClick={() => setSearchParams({})}
              >
            view all
          </button>}
      </section>
      <section className="display-products">
        {selectedProducts}
      </section>  
    </>
  )
}