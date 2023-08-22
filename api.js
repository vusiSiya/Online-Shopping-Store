import React from "react"
import data from "./src/Data"

export default function getProductsData(id){
  // should be fetching data  here, asynchronously.
  const {products} = data;
  if(id){
    const product = products[id-1];
    return product;
  }
  return  products;
}