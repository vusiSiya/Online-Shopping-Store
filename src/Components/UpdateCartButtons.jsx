import React  from "react";
import {FaTrashCan} from 'react-icons/fa6'
import { updateCount, addToCart, getTotalCount} from '../../api'
import { useOutletContext } from 'react-router'

export default function UpdateCartButtons({product, itemCount, setItemCount}){

    return (
        <div style={{margin:"auto", display:"flex", gap:".5em"}}>
        {(itemCount === 0) ?
            <button 
                className='btn--cart' 
                id={product.id} 
                onClick={async()=>{
                    setItemCount(1)
                    await addToCart(product.id)}
                }
            >
                Add to Cart
            </button>

        : (itemCount >= 4 ) ?
            <div style={{display:"flex", gap:".5em", justifyContent:"center", alignItems:"center"}}>
                <input
                    style={{textAlign:"center"}}
                    type='number'
                    value={itemCount}
                    onChange={async (e)=>{
                        setItemCount(Number(e.target.value))
                        return await updateCount(product.id, itemCount)}
                    } 
                />
                <button>
                    <FaTrashCan />
                </button> 
            </div>
            :
                <div style={{margin:"auto", display:"flex", gap:".5em"}}>
                    <button id={product.id} onClick={async(e)=>{
                            setItemCount(prevCount => prevCount + 1)
                            await updateCount(product.id, itemCount )}
                        }
                    > +
                    </button>

                    <span className='count'>{itemCount}</span>

                    <button id={product.id} onClick={async(e)=>{
                            setItemCount(prevCount => prevCount - 1)
                            await updateCount(product.id, itemCount)}
                        }
                    > -
                    </button>
                </div>
            }
        </div>
    )
}