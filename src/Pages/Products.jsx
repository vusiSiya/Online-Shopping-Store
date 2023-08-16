import React from 'react'
import { Outlet } from "react-router-dom"
import Items from '../Components/Items'
import data from '../Data'
import { Link, useSearchParams, useParams, useOutletContext } from "react-router-dom"

export default function Products() {
  const {items} = data;
  const [products, setProducts] = React.useState(items);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  console.log(categoryFilter)
  const { params } = useParams();
  /*React.useEffect(() => {
    console.log("effect ran")
    console.log(data)
    const {items} = data;
    setProducts(items);
  }, []);*/

  const getRandomProducts =()=>{
    let newArray =[]
    for (let i = 0; i < 9; i++) {
      let randomNum = Math.floor(Math.random() * products.length) + 1;
      newArray.push(products[randomNum]);
    }
    return newArray;
  };
  //console.log("products component ran");
  const selectedProductsData = categoryFilter
    ? products.filter((item,i) => item.category ===  categoryFilter)
    : getRandomProducts();

  
  const selectedProducts = selectedProductsData.map(product => {
    return <Items
      key={product?.id}
      product={product}
    />
  });
  console.log(selectedProducts);
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  }
  const filtersContainer = (
    <section className = "filters">
      <button
        className="filter"
        onClick={()=>setSearchParams({category: "women"})}
      >
      women
      </button>
      <button
        className="filter"
        onClick={()=>setSearchParams({category: "men"})}
      >
      men
      </button>
      <button
        className="filter"
        onClick={()=>setSearchParams({category: "watches"})}
      >
      watches
      </button>
      {categoryFilter && 
        <button
          className="filter"
          onClick={()=>setSearchParams({})}
        >
          view all
        </button>}
    </section>
  )
  return (
    <>
      {filtersContainer}
      <section className="display-products">
        {selectedProducts}
      </section>
    </>
  )
}