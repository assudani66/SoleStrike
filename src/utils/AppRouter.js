import React from 'react'
import { Route, Routes } from '../../node_modules/react-router-dom/dist/index'
import HomePage from '../pages/HomePage/HomePage'
import WishList from '../pages/wishlist'
import ProductDetails from '../pages/ProductDetails/productDetails'
import MockmanAPI from '../pages/mockman'
import Store from '../pages/store/store'
import Cart from '../pages/CartPage/cartpage'
import UserProfile from '../pages/userProfile'
import LoginPage from '../pages/loginpage'
import CheckOutPage from '../pages/checkoutPage/checkOutPage'

const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/wishList" element={<WishList/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkOut" element={<CheckOutPage/>}/>
            <Route path="/product-details/:productId" element={<ProductDetails/>}/>
            <Route path="/mockman" element={<MockmanAPI/>}/>
            <Route path="/user-profile" element={<UserProfile/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </>
  )
}

export default AppRouter
