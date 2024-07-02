import {FaTrash} from 'react-icons/fa6'
import { updateCount, addToCart} from '../../api'

export default function UpdateCartButtons({product , count, setCount}){
    //let return null

    if(!count) {
        return <button 
            className='btn--cart' 
            id={product.id} 
            onClick={async()=>{
                await addToCart(product.id)}
            }
        >
            Add to Cart
        </button>
            }
    else if (count <= 3 ){
        return <>
            <button  
                id={product.id} 
                onClick={async()=>{
                    setCount(prevCount => prevCount + 1)
                    await updateCount(product.id, count)}
                }
            >
                +
            </button>
            
            <span className='count'>{product.count}</span>
            <button  
                id={product.id} 
                onClick={async()=>{
                    setCount(prevCount => prevCount - 1)
                    await updateCount(product.id, count)}
                }
            >
                -
            </button>
        </>
    } else {
        return <div className='flex'>
            <input 
                type='number'
                id={product.id}
                value={count}
                onChange={(event)=>handleChange(event)}
            />
            <FaTrash />
        </div>	 
    }

    return ui;
}