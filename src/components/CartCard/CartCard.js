import React from 'react'
import { useCart } from '../../context/cartContext'
import { useWishList } from '../../context/wishListContext'

const CartCard = (product) => {

  const {_id,image,name,price,originalPrice,bgColor,availableVariants,qty,isInCart} = product

  const checkQuantity = () => {
    if(qty <= 1){
        return false
    }else{
        return true
    }
  }

  const {removeCartItem,updateItemQuantity,addToCart} = useCart()
  const {removeWishListItem} = useWishList()


  const moveToCartFromWishList = (product) =>{
    removeWishListItem(product)
    addToCart(product)
  } 
  return (
    <div className='productCard' >
      <img style={{width:'10%'}} src={image} alt={name}/>
      <p>{name}</p>
      <p>price:{price}</p>
      <div>availableVariants:<span>{availableVariants.map(({color,name})=><span>name</span>)}</span></div>
      <p>price:{price}</p>
      {isInCart && <div>
      <button onClick={()=>updateItemQuantity(product,"increment")}>+</button>
      <p>{checkQuantity ? qty : 1}</p>
     {checkQuantity() && <button onClick={()=>updateItemQuantity(product,"decrement")}>-</button>}
     { <button onClick={()=>removeCartItem(product)}>RemoveFromCart</button>}
      </div>}
      {!isInCart && <div>
        <button onClick={()=>moveToCartFromWishList(product)}>Move to Cart</button>    
    </div>}
    </div>
  )
}

export default CartCard
