import React from 'react'
import { NavLink } from '../../../node_modules/react-router-dom/dist/index'

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/wishlist">WishList</NavLink>
      <NavLink to="/user-profile">UseProfile</NavLink>
      </div>
  )
}

export default Navbar