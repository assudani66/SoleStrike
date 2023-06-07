import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import { useFilterContext } from '../../context/filterContext';

const Navbar = () => {
  const {filterDispatch} = useFilterContext()
  const navigate = useNavigate()
  return (
    <nav className="navbar">
      <div className="logo" onClick={()=>navigate("/store")}>soleStrike</div>
      <Link to="/" className="nav-links">What's New</Link>
      <div className="search-bar">
        <input  onChange={(e) => filterDispatch({ type: "searchName", payload: e.target.value })} type="text" className="search-input" placeholder="Search here" />
        <FaSearch className="search-icon" />
      </div>
      <div className="nav-links">
        <Link to="/wishlist">
          <FaHeart className="icon" /> Wishlist
        </Link>
        <Link to="/cart">
          <FaShoppingCart className="icon" /> Cart
        </Link>
        <Link to="/user-profile">
          <FaUser className="icon" /> Account
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
