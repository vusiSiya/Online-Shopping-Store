import React from "react"
import data from "./src/data"

export default async function getProductsData(productId=0) {
	const {products} = data;
	return productId && products.find(product=>product.id === Number(productId)) || products;
}

export async function getItemsOnCart(){
	const itemsOnCart = data.products.filter(item=> item.count > 0);
	return itemsOnCart || 0;
}

export async function getBackgroundImg(index) {
	const {backgroundImgUrls} = data
	return backgroundImgUrls[index]
}
