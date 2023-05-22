import React from 'react'

const ProductCard = ({_id,image,name,price,originalPrice,bgColor,availableVariants}) => {
  return (
    <div className='productCard' >
      <img style={{width:'10%'}} src={image} alt={name}/>
      <p>{name}</p>
      <p>price:{price}</p>
      <div>availableVariants:<span>{availableVariants.map(({color,name})=><span>name</span>)}</span></div>
      <p>price:{price}</p>
      <button>Add to Cart</button>
      <button>Add to wishList</button>
    </div>
  )
}

export default ProductCard
