import React, { useState } from 'react';
import { RiFilterLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import './Sidebar.css';

const SideBarComponent = ({isOpen}) => {

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-heading">Filters</h2>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-section">
          <h3>Category</h3>
          {/* Add your category content here */}
        </div>
        <div className="sidebar-section">
          <h3>Size</h3>
          {/* Add your size content here */}
        </div>
        <div className="sidebar-section">
          <h3>Price Range</h3>
          {/* Add your price range content here */}
        </div>
        <div className="sidebar-section">
          <h3>Material</h3>
          {/* Add your material content here */}
        </div>
        <div className="sidebar-section">
          <h3>Ratings and Reviews</h3>
          {/* Add your ratings and reviews content here */}
        </div>
      </div>
    </div>
  );
};

export default SideBarComponent;
