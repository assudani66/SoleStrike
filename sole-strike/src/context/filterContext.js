import React, { createContext, useContext, useReducer, useState } from 'react'
import { useProductData } from '../hooks/useProductData'



const filterContext = createContext()

const FilterContextProvider = (props) => {
const productData = useProductData()
const activeFiltersInitialValue = {
    searchName : "",
    activeCategory:[],
    priceRange: 100,
}

const filterReducer = (activeFilter, action) => {
    switch (action.type) {
      case "searchName":
        return { ...activeFilter, searchName: action.payload };
      case "activeCategory":
        if (activeFilter.activeCategory.includes(action.payload)) {
          return {
            ...activeFilter,
            activeCategory: activeFilter.activeCategory.filter(
              category => category !== action.payload
            )
          };
        } else {
          return {
            ...activeFilter,
            activeCategory:[...activeFilter.activeCategory,action.payload]
          };
        }
        case "priceRange":
            return{
                ...activeFilter,priceRange:action.payload
            }
            
            default:
                return activeFilter
            }
}
            
    const [activeFilters,filterDispatch] = useReducer(filterReducer,activeFiltersInitialValue)

    const categoryFiltered = activeFilters.activeCategory.length > 0
  ? productData.filter((product) =>
      activeFilters.activeCategory.includes(product.category)
    )
  : productData;
  

  const priceFiltered = categoryFiltered.filter((product) => product.price<activeFilters.priceRange)
  
  const searchFiltered = activeFilters.searchName.length >= 0 ? priceFiltered.filter((product)=>product.name.toLowerCase().includes(activeFilters.searchName.toLowerCase())) : priceFiltered

  const filteredProductListing = searchFiltered
    return (
    <filterContext.Provider value={{activeFilters,filterDispatch,filteredProductListing}
    }>{props.children}</filterContext.Provider>
  )
}

export default FilterContextProvider

export const useFilterContext = () => useContext(filterContext)