import React from 'react'
import { useCart } from '../../context/cartContext'

const CartCard = (product) => {

  const {_id,image,name,price,originalPrice,bgColor,availableVariants,qty} = product

  const checkQuantity = () => {
    if(qty <= 1){
        return false
    }else{
        return true
    }
  }

  const {removeItem,updateItemQuantity} = useCart()
  return (
    <div className='productCard' >
      <img style={{width:'10%'}} src={image} alt={name}/>
      <p>{name}</p>
      <p>price:{price}</p>
      <div>availableVariants:<span>{availableVariants.map(({color,name})=><span>name</span>)}</span></div>
      <p>price:{price}</p>
      <button onClick={()=>updateItemQuantity(product,"increment")}>+</button>
      <p>{checkQuantity ? qty : 1}</p>
     {checkQuantity() && <button onClick={()=>updateItemQuantity(product,"decrement")}>-</button>}
      <button onClick={()=>removeItem(product)}>RemoveFromCart</button>
    </div>
  )
}

export default CartCard
