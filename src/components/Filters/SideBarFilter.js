import React from 'react'
import { useFilterContext } from '../../context/filterContext'

const SideBarFilter = () => {
    const {activeFilters,filterDispatch} = useFilterContext()
    return (
        <div>
          <input
            onChange={(e) => filterDispatch({ type: "searchName", payload: e.target.value })}
          />
          <label htmlFor='casualShoes'>Casual Shoes</label>
          <input
            id='casualShoes'
            type='checkbox'
            checked={activeFilters.activeCategory.includes('Casual_Shoes')}
            onChange={(e) =>{
              filterDispatch({ type: "activeCategory", payload: e.target.value })}
            }
            value='Casual_Shoes'
          />
          <label htmlFor='sportShoes'>Sport Shoes</label>
          <input
            id='sportShoes'
            type='checkbox'
            checked={activeFilters.activeCategory.includes('Sport_Shoes')}
            onChange={(e) =>{
              filterDispatch({ type: "activeCategory", payload: e.target.value })}
            }
            value='Sport_Shoes'
          />
          <input type='range' step={10} onChange={(e)=>filterDispatch({type:"priceRange",payload:e.target.value})}/>
        </div>
      )
    }

export default SideBarFilter
