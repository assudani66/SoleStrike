import React from 'react'
import { useProductData } from '../hooks/useProductData'
import ProductCard from '../components/ProductCard/ProductCard'
import SideBarFilter from '../components/Filters/SideBarFilter'
import { useFilterContext } from '../context/filterContext'

const Store = () => {
 const shoesData =  useProductData()
 const {filteredProductListing} = useFilterContext()
  return (
    <div>
      <SideBarFilter />
      {filteredProductListing.map(shoeData=><ProductCard {...shoeData} key={shoeData._id}/>)}
    </div>
  )
}

export default Store