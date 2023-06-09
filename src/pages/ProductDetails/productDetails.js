import React, { useEffect, useState } from 'react'
import { useParams } from '../../../node_modules/react-router-dom/dist/index'
import "./productDetails.css"
import { AddToCartBtn, AddtoWishListBtn } from '../../components/ProductCard/buttons'

const ProductDetails = () => {
  const {productId} =  useParams()
  const [productInfo,setProductInfo] = useState({product:{availableSizes:[],availableVariants:[],bgColor:"",category:"",image:"",material:"",name:"",originalPrice:"",price:"",rating:["",""]}})
  useEffect(() => {
    const getProductInfo = async () => {
      const response = await fetch(`/api/products/${productId}`);
      const productData = await response.json();
      setProductInfo(productData);
    };
    getProductInfo();
  }, [productId]);

 const {availableSizes,availableVariants,bgColor,category,rating,image,material,name,originalPrice,price} = productInfo.product

  return(
    <div className='productDetails'>
      <div className='productDetailsImageDiv'>
      <img className='productDetailsImage' src={image}/>
      <AddToCartBtn product={productInfo.product}/>
      </div>
      <AddtoWishListBtn product={productInfo.product}/>
      <div className='productDetailsOptions'>
        <div className='baseInfo'>
          <h1 className='heading'>{name}</h1>
          <p className='description'>this is a description</p>
          <p className='rating'>{rating[0]}({rating[1]})</p>
        </div>
        <div>
        <h3 className='price'><span className='rupeesSign'>₹</span>{price}</h3>
        <hr></hr>
        <div className="sizeCotainer">
          <h3>Size</h3>
        <div className='sizeRow'>
        {availableSizes.map(size => (
          <div
            key={size}
            value={size}
            className={"productDetailsShoeSize"}
          >
            <div className={`productDetailShoeSizeText`}>{size}</div>
        </div>))}
          </div>
          <hr/>
          <div className='chooseColorSection'>
            <h3>Choose your Color</h3>
            <div className="colorSelection">
              {availableVariants.map(({color,name})=>
              <div className='colorOption' style={{backgroundColor:`${color}`}}></div>
              )}
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ProductDetails