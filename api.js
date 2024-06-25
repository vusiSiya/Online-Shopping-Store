import React from "react"
import {jsonData} from "./src/Data.jsx"

localStorage.setItem("products",jsonData)
const CART_ITEMS_KEY = Object.freeze("cart-items");
const ALL_PRODUCTS_KEY = Object.freeze("products");

//  --reading--  //

export default async function getProducts() {
	const products = JSON.parse(localStorage.getItem(ALL_PRODUCTS_KEY))
	return products || null
}

export async function getSingleProduct(id){
	const products = await getProducts() 
	const item = products.find(product=>product.id === Number(id)) 
	return item || null
}

export async function getCartItems(){
	const snapShot = localStorage.getItem(CART_ITEMS_KEY)
	return snapShot || null
}

export async function getTotalCount() {
	const cartItems = await getCartItems()
	return cartItems?.reduce((sum, item)=> sum + item.count) || 0
}

export async function getTotalCost() {
	const cartItems = await getCartItems()
	const totalCost = cartItems.reduce((sum, item)=>{
		return sum + item.price * item.count 
	}, 0)

	return totalCost || 0
}


//  --writing--  //

export async function addToCart(id) {
	const cartItems = await getCartItems()
	const currentItem = await getSingleProduct(id)
	cartItems.push({
		...currentItem,
		count: 1
	})
	localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(cartItems))
}

export async function updateCount(id, count=0){
	const cartItems = await getCartItems();
	const currentItem = await getSingleProduct(id)
	cartItems.push({
		...currentItem,
		count: Number(count)
	})
	localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(cartItems))
}
