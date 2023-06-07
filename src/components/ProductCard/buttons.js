import React, { useState } from 'react'
import { useCart } from '../../context/cartContext'
import { AiFillHeart } from 'react-icons/ai';
import { useWishList } from '../../context/wishListContext';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import "./productCard.css"
import toast, { Toaster } from 'react-hot-toast';


export const AddtoWishListBtn = ({product}) => {
    const { addToCart} = useCart()
    const { addTowishList, removeWishListItem} = useWishList()
    const [addedToWishList,setAddedToWishList] = useState(false)
  return (
    <button className={`addToWishListBtn ${addedToWishList ?"added" : "" }`} onClick={() => {
        addedToWishList ?  removeWishListItem(product) : addTowishList(product)
      setAddedToWishList(!addedToWishList)}}><AiFillHeart/></button>
  )
}
export const RemovetoWishListBtn = ({product}) => {
    const { addToCart} = useCart()
    const { addTowishList, removeWishListItem} = useWishList()
    
  return (
    <button className={`addToWishListBtn added`} onClick={() => {removeWishListItem(product)}}><AiFillHeart/></button>
  )
}

export const AddToCartBtn = ({product}) => {
    const [addedToCart,setAddedToCart] = useState(false)
    const { addToCart } = useCart()
    const navigate = useNavigate()
    return(
        <button className={`addToCartBtn ${addedToCart ? "selected" :""}`} onClick={() => {
            addedToCart && navigate('/cart')
            addToCart(product) 
            setAddedToCart(!addedToCart)
            }}>{addedToCart?'Go to Cart':'Add To Cart'}</button>
    )
}