import React from 'react'
import "./productCard.css"
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import { AddToCartBtn, AddtoWishListBtn } from './buttons';
const ProductCard = (product) => {

  const {_id,image,name,price,originalPrice,bgColor,availableVariants,rating,availableSizes,material,qty} = product
  
  const navigate = useNavigate()
  return (
    <div className='productCard' >
      <AddtoWishListBtn product={product}/>
      <img className='productImage' onClick={()=>navigate(`/product-details/${_id}`)} src={image} alt={name}/>
      <div className='productData'>
      <div className='productNameInfo'>
      <h4 className='productName'>{name}</h4>
      <p className='productPrice'><span className='ruppesSign'>₹</span>{price}</p>
      </div>
      <p className='productDescription'>This is a dummy description of the shoe.</p>
      <span className='productRating'>{rating[0]} ({rating[1]})</span>
      <AddToCartBtn product={product}/>
      </div>
    </div>
  )
}
export default ProductCard

