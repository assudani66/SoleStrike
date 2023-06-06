import React from 'react'
import { useFilterContext } from '../../context/filterContext'
import Accordion from './FilterAccordian'

const SideBarFilter = () => {
    const {activeFilters,filterDispatch} = useFilterContext()
    const sizes = [6,7,8,9,10,11,12]
    const rating = [{display:'⭐',value:1},{display:'⭐⭐',value:2},{display:'⭐⭐⭐',value:3},{display:'⭐⭐⭐⭐',value:4},{display:'⭐⭐⭐⭐⭐',value:5}]
    return (
        <div>
          <h1>Filters</h1>
          <Accordion heading="Categories">
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
          <label htmlFor='dressShoes'>Dress Shoes</label>
          <input
            id='dressShoes'
            type='checkbox'
            checked={activeFilters.activeCategory.includes('Dress_Shoes')}
            onChange={(e) =>{
              filterDispatch({ type: "activeCategory", payload: e.target.value })}
            }
            value='Dress_Shoes'
          />
          </Accordion>
          <Accordion heading={'Price'}>
          <input type='range' step={10} onChange={(e)=>filterDispatch({type:"priceRange",payload:e.target.value})}/>
          </Accordion>
          <Accordion heading={"Size"}>
          <div style={{display:"flex"}}>
            <div style={{display:"block"}}>
              {sizes.map(size=><div value={size} className='shoeSize' onClick={()=>filterDispatch({type:"activeSize",payload:size})}><div className='shoeSizeText'>{size}</div></div>)}
            </div>
          </div>
          </Accordion>
          <Accordion heading={"Material"}>
          <label>Leather
          <input
            id='Leather'
            type='checkbox'
            checked={activeFilters.activeMaterial.includes('Leather')}
            onChange={(e) =>{
              filterDispatch({ type: "activeMaterial", payload: e.target.value })}
            }
            value='Leather'
          />
          </label>
          <label>Canvas
          <input
            id='Canvas'
            type='checkbox'
            checked={activeFilters.activeMaterial.includes('Canvas')}
            onChange={(e) =>{
              filterDispatch({ type: "activeMaterial", payload: e.target.value })}
            }
            value='Canvas'
          />
          </label>
          <label>Synthetic
          <input
            id='Synthetic'
            type='checkbox'
            checked={activeFilters.activeMaterial.includes('Synthetic')}
            onChange={(e) =>{
              filterDispatch({ type: "activeMaterial", payload: e.target.value })}
            }
            value='Synthetic'
          />
          </label>
          </Accordion>
          <Accordion heading={'Rating'}>
          <div>{rating.map(({display,value})=><div style={{cursor:"pointer"}} onClick={()=>filterDispatch({type:'ratingSelect',payload
          :value})}>{display}</div>)
            }
          </div>
          </Accordion>
        </div>
      )
    }

export default SideBarFilter
