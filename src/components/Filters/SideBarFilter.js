import React from 'react'
import { useFilterContext } from '../../context/filterContext'

import Accordion from './FilterAccordian'
import "./Sidebar.css"
import { CheckBoxCategory, CheckBoxMaterial } from './CheckBox';
const SideBarFilter = () => {
    const {activeFilters,filterDispatch} = useFilterContext()
    const sizes = [6,7,8,9,10,11,12]
    const rating = [{display:'⭐',value:1},{display:'⭐⭐',value:2},{display:'⭐⭐⭐',value:3},{display:'⭐⭐⭐⭐',value:4},{display:'⭐⭐⭐⭐⭐',value:5}]
    return (
        <div className='filterContainer'>
          <h1 className='heading'>Filters</h1>
          <Accordion heading="Categories">
          <CheckBoxCategory value="Casual_Shoes" displayName="Casual Shoes" filter="activeCategory" />
          <CheckBoxCategory value="Sport_Shoes" displayName="Sport Shoes" filter="activeCategory" />
          <CheckBoxCategory value="Dress_Shoes" displayName="Dress Shoes" filter="activeCategory" />
          </Accordion>
          <Accordion heading={'Price'}>
          <input type='range' step={10} onChange={(e)=>filterDispatch({type:"priceRange",payload:e.target.value})}/>
          </Accordion>
          <Accordion heading={"Size"}>
          <div className='sizeFilterContainer'>
  <div className='sizeRow'>
    {sizes.map(size => (
      <div
        key={size}
        value={size}
        className={`shoeSize ${activeFilters.activeSize === size ? 'selected' : ''}`}
        onClick={() => filterDispatch({ type: "activeSize", payload: size })}
      >
        <div className={`shoeSizeText ${activeFilters.activeSize === size ? 'selected' : ''}`}>{size}</div>
      </div>
    ))}
  </div>
</div>
          </Accordion>
          <Accordion heading={"Material"}>
            {console.log(activeFilters)}
            <CheckBoxMaterial value='Leather' displayName="Leather" filter="activeMaterial"/>
            <CheckBoxMaterial value='Canvas' displayName="Canvas" filter = "activeMaterial"/>
            <CheckBoxMaterial value='Synthetic' displayName="Synthetic" filter = "activeMaterial"/>
          </Accordion>
          <Accordion heading={'Rating'}>
          <div >{rating.map(({display,value})=><div className='ratingOptions' onClick={()=>filterDispatch({type:'ratingSelect',payload
          :value})}>{display}</div>)
            }
          </div>
          </Accordion>
        </div>
      )
    }

export default SideBarFilter
