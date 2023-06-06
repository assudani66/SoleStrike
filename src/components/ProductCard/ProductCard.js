import React, { useState } from 'react'
import { useCart } from '../../context/cartContext'
import { useWishList } from '../../context/wishListContext'
import { AiFillHeart } from 'react-icons/ai';
import "./productCard.css"
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
const ProductCard = (product) => {

  const {_id,image,name,price,originalPrice,bgColor,availableVariants,rating,availableSizes,material,qty} = product
  const { addToCart ,} = useCart()
  const { addTowishList } = useWishList()
  const [addedToCart,setAddedToCart] = useState(false)
  const [addedToWishList,setAddedToWishList] = useState(false)
  // const addedToCart = () => 
  const navigate = useNavigate()
  return (
    <div className='productCard' onClick={()=>navigate(`/product-details/${_id}`)}>
      <button className='addToWishListBtn' onClick={() => {addTowishList(product)
      setAddedToWishList(!addedToWishList)}}><AiFillHeart/></button>
      <img className='productImage' src={image} alt={name}/>
      <div className='productData'>
      <div className='productNameInfo'>
      <h4 className='productName'>{name}</h4>
      <p className='productPrice'><span className='ruppesSign'>₹</span>{price}</p>
      </div>
      <p className='productDescription'>This is a dummy description of the shoe.</p>
      <span className='productRating'>{rating[0]} ({rating[1]})</span>
      <button className={`addToCartBtn ${addedToCart ? "selected" :""}`} onClick={() => {
      addedToCart && navigate('/cart')
      addToCart(product) 
      setAddedToCart(!addedToCart)
      }}>{addedToCart?'Go to Cart':'Add To Cart'}</button>
      </div>
    </div>
  )
}
export default ProductCard

//<div>availableVariants: <span>{availableVariants.map(({color,name})=><span>{name}, </span>)}</span></div>
