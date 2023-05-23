import React from 'react'
import { useProductData } from '../hooks/useProductData'
import { useCart } from '../context/cartContext'

const Cart = () => {
    const cart = useCart()
  return (
    <div>
      "yourCart"
    </div>
  )
}

export default Cart