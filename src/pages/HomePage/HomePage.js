import React from 'react'
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index'
import { useFilterContext } from '../../context/filterContext'
import "./homepage.css"
const HomePage = () => {
  const navigate = useNavigate()
  const {filterDispatch} = useFilterContext()
  return (
    <div className='homePage'>
      <img src="/images/SoleStrike Hero Image.png"/>
      <div className='categories'>
      <div onClick={()=>{
        navigate("/store")
        filterDispatch({ type: "activeCategoryFromLandingPage", payload: "Casual_Shoes"})
        }}
        className='shoesCategory'
        >
          <img src='/images/shoe1.png'/>
          <h3>Casual Shoes</h3>
        
      </div>
      <div onClick={()=>{
        navigate("/store")
        filterDispatch({ type: "activeCategoryFromLandingPage", payload: "Sport_Shoes"})
        }}
        className='shoesCategory'
        >
          <img src='/images/shoe2.png' />
        <h3>Sport Shoes</h3>
      </div>
      <div onClick={()=>{
        navigate("/store")
        filterDispatch({ type: "activeCategoryFromLandingPage", payload: "Dress_Shoes"})
        }} className='shoesCategory'>
        <img src='/images/shoe3.png' />
        <h3>Dress Shoes</h3>
      </div>
      </div>
    </div>
  )
}

export default HomePage