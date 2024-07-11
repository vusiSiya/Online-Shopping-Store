import React  from "react";
import {FaTrashCan} from 'react-icons/fa6'

export default function UpdateCartButtons(props){

    const {id, itemCount, handleChange, handleClick, addItem, removeItem} = props

    return (
        <div style={{margin:"auto", display:"flex", gap:".5em"}}>
            {(itemCount === 0) ?
                <button className='btn--cart' onClick={addItem}>
                    Add to Cart
                </button>

                : (itemCount >= 4 ) ?
                    <div style={{display:"flex", gap:".5em", justifyContent:"center", alignItems:"center"}}>
                        <input
                            style={{textAlign:"center"}}
                            type='number'
                            value={itemCount}
                            onChange={handleChange} 
                        />
                        <button onClick={removeItem}> <FaTrashCan /> </button> 
                    </div>

                : <div style={{margin:"auto", display:"flex", gap:".5em"}}>
                        <button id="plus" onClick={(e)=>handleClick(e)}> + </button>
                        <span className='count'> {itemCount}</span>
                        <button id="minus" onClick={(e)=>handleClick(e)}> - </button>
                    </div>
            }

        </div>
    )
}