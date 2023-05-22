import React from 'react'
import { Route, Routes } from '../../node_modules/react-router-dom/dist/index'
import HomePage from '../pages/HomePage'
import WishList from '../pages/wishlist'
import ProductDetails from '../pages/productDetails'
import MockmanAPI from '../pages/mockman'
import Store from '../pages/store'

const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/wishList" element={<WishList/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/cart" element={<WishList/>}/>
            <Route path="/product-details/:productId" element={<ProductDetails/>}/>
            <Route path="/mockman" element={<MockmanAPI/>}/>
        </Routes>
    </>
  )
}

export default AppRouter