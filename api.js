import React from "react"
import data from "./src/Data"

export default async function getProductsData(productId=0) {
	const {products} = data;
	return productId && products.find(product=>product.id === parseInt(productId)) || products;
}

export async function getBackgroundImg(index) {
	const {backgroundImgUrls} = data
	return backgroundImgUrls[index]
}
