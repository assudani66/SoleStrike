import React from 'react'
import { useFilterContext } from '../../context/filterContext'
import { BsCheckLg } from 'react-icons/bs';

export const CheckBoxCategory = ({value,displayName,filter}) => {
    const {filterDispatch,activeFilters} = useFilterContext()

    return (
        <div className='filterCheckBox' 
        onClick={() =>{filterDispatch({ type: "activeCategory", payload:value })}}>
        <label htmlFor='casualShoes'>{displayName}</label>
        <div>
            
        {activeFilters.activeCategory.includes(value) && <BsCheckLg/>}
        </div>
        </div>
    )
}
export const CheckBoxMaterial = ({value,displayName}) => {
    const {filterDispatch,activeFilters} = useFilterContext()

    return (
        <div className='filterCheckBox' 
        onClick={() =>{filterDispatch({ type: "activeMaterial", payload:value })}}>
        <label htmlFor='casualShoes'>{displayName}</label>
        <div>
            
        {activeFilters.activeMaterial.includes(value) && <BsCheckLg/>}
        </div>
        </div>
    )
}

