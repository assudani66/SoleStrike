import React, { createContext, useContext, useReducer, useState } from 'react'
import { useProductData } from '../hooks/useProductData'

const filterContext = createContext()

const FilterContextProvider = (props) => {
const productData = useProductData()
const activeFiltersInitialValue = {
    searchName : "",
    activeCategory:[],
    activeSize:'ALL',
    ratingSelect:'ALL',
    priceRange: 100,
    sortBy:"NONE",
    activeMaterial:[]
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
        case "activeSize" :
          return{
            ...activeFilter,activeSize:action.payload
          }
          case "activeMaterial":
            if (activeFilter.activeMaterial.includes(action.payload)) {
              return {
                ...activeFilter,
                activeMaterial: activeFilter.activeMaterial.filter(
                  material => material !== action.payload
                )
              };
            } else {
              return {
                ...activeFilter,
                activeMaterial:[...activeFilter.activeMaterial,action.payload]
              };
            }
          case "ratingSelect" : 
          return{
            ...activeFilter,ratingSelect:action.payload
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
  
  const materialFiltered = activeFilters.activeMaterial.length > 0
  ? categoryFiltered.filter((product) =>
  activeFilters.activeMaterial.includes(product.material)
  )
  : categoryFiltered;


  const ratingFiltered = activeFilters.ratingSelect === "ALL" ? materialFiltered : materialFiltered.filter((product)=>product.rating[0] >= activeFilters.ratingSelect)
  console.log()
  const priceFiltered = ratingFiltered.filter((product) => product.price<activeFilters.priceRange)

  const sizeFiltered = activeFilters.activeSize === "ALL" ? priceFiltered : priceFiltered.filter((product)=>product.availableSizes.includes(parseInt(activeFilters.activeSize)))

  const searchFiltered = activeFilters.searchName.length >= 0 ? sizeFiltered.filter((product)=>product.name.toLowerCase().includes(activeFilters.searchName.toLowerCase())) : sizeFiltered

  const filteredProductListing = searchFiltered
    return (
    <filterContext.Provider value={{activeFilters,filterDispatch,filteredProductListing}
    }>{props.children}</filterContext.Provider>
  )
}

export default FilterContextProvider

export const useFilterContext = () => useContext(filterContext)