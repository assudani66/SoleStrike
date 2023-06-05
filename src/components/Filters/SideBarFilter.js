import React from 'react'
import { useFilterContext } from '../../context/filterContext'

const SideBarFilter = () => {
    const {activeFilters,filterDispatch} = useFilterContext()
    const sizes = [6,7,8,9,10,11,12]
    const rating = []
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
          <div style={{display:"flex"}}>
            <div>
              {sizes.map(size=><div value={size} className='shoeSize' onClick={()=>filterDispatch({type:"activeSize",payload:size})}><div className='shoeSizeText'>{size}</div></div>)}
            </div>
          </div>
          {console.log(activeFilters)}
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
          <select onChange={e=>filterDispatch({type:'ratingSelect',payload:(e.target.value)})}>
            <option value={1}>
              ⭐
            </option>
            <option value={2}>
              ⭐⭐
            </option>
            <option value={3}>
              ⭐⭐⭐
            </option>
            <option value={4}>
              ⭐⭐⭐⭐
            </option>
            <option value={5}>
              ⭐⭐⭐⭐⭐
            </option>
          </select>
        </div>
      )
    }

export default SideBarFilter
