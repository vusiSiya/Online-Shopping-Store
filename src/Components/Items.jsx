import React from 'react'
import { Link } from 'react-router-dom'

export default function Items(props) {
  const {product} = props;
  return (
    <div id={props.id} className='product'>
        <img src={props.img} className='product--img' />
	    <p className='product--name'>{props.name}</p>
    </div>
  )
}
