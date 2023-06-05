import React from 'react'
import { useNavigate } from '../../node_modules/react-router-dom/dist/index'
import { useFilterContext } from '../context/filterContext'

const HomePage = () => {
  const navigate = useNavigate()
  const {activeFilters,filterDispatch} = useFilterContext()
  return (
    <div>
      <div onClick={()=>{
        navigate("/store")
        filterDispatch({ type: "activeCategory", payload: "Casual_Shoes"})
        }}>
        Casual_Shoes
      </div>
      <div onClick={()=>{
        navigate("/store")
        filterDispatch({ type: "activeCategory", payload: "Casual_Shoes"})
        }}>
        Sport_Shoes
      </div>
      <div onClick={()=>{
        navigate("/store")
        filterDispatch({ type: "activeCategory", payload: "Casual_Shoes"})
        }}>
        Casual_Shoes
      </div>
      </div>
    </div>
  )
}

export default HomePage