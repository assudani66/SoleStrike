import React from 'react'
import { useParams } from '../../node_modules/react-router-dom/dist/index'
import { useProductInfo } from '../hooks/useProduct'

const ProductDetails = () => {
  const {productId} =  useParams()
  const productInfo=useProductInfo(productId)
  
  return (
    <div>{productId}</div>
  )
}

export default ProductDetails