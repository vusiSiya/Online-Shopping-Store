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

  function renderProducts(products) {

    function getRandomProducts() {
      let newArray = []
      for (let i = 1; i <= 8; i++) {
        let randomNum = Math.floor(Math.random() * 2) + 1;
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
        linkState={{ search: `?${searchParams.toString()}` }}
      />
    });

    return (
      <section className="display-products">
        {selectedProducts}
      </section>
    )
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
          (<button
            type="button"
            className="filter"
            onClick={() => setSearchParams({})}
          >
            view all
          </button>)
        }
      </section>
      <React.Suspense fallback={<h2>Loading products...</h2>}>
        <Await
          resolve={dataPromise.products}
        >
          {(products) => renderProducts(products)}
        </Await>
      </React.Suspense>
    </>
  )
}