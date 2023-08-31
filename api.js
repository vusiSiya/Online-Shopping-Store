import React from "react"
import data from "./src/Data"

async function pause(delay) {
  return setTimeout(() => console.log(` ${delay/1000} x seconds delay`), delay);
}
export default async function getProductsData(id = 0) {
  await pause(1000);
  const { products } = data;
  if (id != 0) {
    const product = products[id - 1];
    return product;
  }
  return products;
}

export async function getBackgroundImg(index) {
  await pause(1000);
  const imgUrl = data.backgroundImgUrls[index];
  return imgUrl;
}