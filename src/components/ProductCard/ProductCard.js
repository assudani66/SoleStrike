import React from 'react'
import { useCart } from '../../context/cartContext'
import { useWishList } from '../../context/wishListContext'

const ProductCard = (product) => {

  const {_id,image,name,price,originalPrice,bgColor,availableVariants,rating,availableSizes,material,qty} = product

  const{addToCart} = useCart()
  const{addTowishList} = useWishList()
  return (
    <div className='productCard' >
      <img style={{width:'10%'}} src={image} alt={name}/>
      <p>{name}</p>
      <p>price:{price}</p>
      <div>availableVariants: <span>{availableVariants.map(({color,name})=><span>{name}, </span>)}</span></div>
      <p>price:{price}</p>
      <span>rating:{rating[0]}{`(${rating[1]})`}</span>
      <p>material:{material}</p>
      <button onClick={()=>addToCart(product)}>Add to Cart</button>
      <button onClick={()=>addTowishList(product)}>Add to wishList</button>
      <p>{availableSizes.map(size=><span>{size},</span>)}</p>
      <p>{qty}</p>

    </div>
  )
}

export default ProductCard
