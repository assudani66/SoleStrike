import React from 'react'
import { useCart } from '../../context/cartContext'
import { useWishList } from '../../context/wishListContext'

const ProductCard = (product) => {

  const {_id,image,name,price,originalPrice,bgColor,availableVariants,qty} = product

  const{addToCart} = useCart()
  const{addTowishList} = useWishList()
  return (
    <div className='productCard' >
      <img style={{width:'10%'}} src={image} alt={name}/>
      <p>{name}</p>
      <p>price:{price}</p>
      <div>availableVariants:<span>{availableVariants.map(({color,name})=><span>name</span>)}</span></div>
      <p>price:{price}</p>
      <button onClick={()=>addToCart(product)}>Add to Cart</button>
      <button onClick={()=>addTowishList(product)}>Add to wishList</button>
      <button>+</button>
      <p>{qty}</p>
      <button>-</button>
    </div>
  )
}

export default ProductCard
