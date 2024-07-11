import React from "react"
import {jsonData} from "./src/Data.jsx"


const CART_ITEMS_KEY = Object.freeze("cart-items")
const ALL_PRODUCTS_KEY = Object.freeze("products")
localStorage.setItem(ALL_PRODUCTS_KEY, jsonData)
localStorage.setItem(CART_ITEMS_KEY,[])


//  --reading data--  //

export default async function getProducts() {
	const products = JSON.parse(localStorage.getItem(ALL_PRODUCTS_KEY))
	return products || null
}

export async function getSingleItem(id){
	const products = await getProducts() 
	return products.find(product=>product.id === Number(id)) || null
}

export async function getSingleCartItem(id){
	const products = await getCartItems() 
	return products && products.find(product=> product.id === Number(id)) || null
}

export async function getCartItems(){
	const json = localStorage.getItem(CART_ITEMS_KEY) || null
	if(json !== null){
		const items = JSON.parse(json)
		return items
	}
	return null
}

export async function getTotalCount() {
	const cartItems = await getCartItems()
	return cartItems ?
		cartItems.reduce((sum, item)=> (sum + item.count), 0) : 0
}

export async function getTotalCost() {
	const cartItems = await getCartItems()
	const totalCost = cartItems.reduce((sum, item)=>{
		return sum + item.price * item.count 
	}, 0)
	return totalCost || 0
}


//  ---writing to data---  //

export async function addToCart(id) {
	const cartItems = await getCartItems() || []
	const existingItem = cartItems?.find(item => item.id === id) || null

	if(existingItem === null){
		const currentItem =  await getSingleItem(id)
		const newArray = [...cartItems, {...currentItem, count: 1}]
		localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(newArray))
	}
}

export async function updateCount(id, count=1){
	const cartItems = await getCartItems()
	const newArray = cartItems.map(item =>{
		if(item.id === Number(id)){
			return {...item, count: Number(count)}
		}
		return item
	})

	localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(newArray))
}

export async function removeProduct(id) {
	const cartItems = await getCartItems()
	const newArray = cartItems?.filter(item => item.id != Number(id))
	localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(newArray))
} 

export function getNonRepeatingItems(array=[]) {
	return array.map((item)=>{
		const matchingItems = array.filter($=> $.id === item?.id)
		const isNotRepeating = (matchingItems.length === 1)
		return isNotRepeating && item || null
	}).filter(item=>item)
}

// export function arr(array=[]) {
// 	return array.map(item =>{
// 		const firstMatchingItem = array.filter(el=> el.id === item?.id)[0]
// 		return firstMatchingItem || item
// 	})
// 	const matchingItems = array.filter(el=> el.id === item?.id)
// 	matchingItems.pop()
// 	array = [...array, ...matchingItems]
// }

