import React from "react"
import data from "./src/Data"
 
async function pause(delay) {
  return setTimeout(() => console.log(` ${delay/1000} x seconds delay`), delay);
}
export default async function getProductsData(id = 0) {
  await pause(2000);
  const { products } = data;
  if (id != 0) {
    let product
    product = products[id];
    return product;
  }
  return products;
}

export async function getBackgroundImg(index) {
  let imgUrl
  imgUrl = data.backgroundImgUrls[index]
  return imgUrl;
}