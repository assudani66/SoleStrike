import React, { useState } from "react";
import "./store.css";
import { useFilterContext } from '../../context/filterContext';
import { BsFilterLeft } from 'react-icons/bs';
import ProductCard from '../../components/ProductCard/ProductCard';
import SideBarFilter from "../../components/Filters/SideBarFilter";

const Store = () => {
  const { filteredProductListing } = useFilterContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cardCount, setCardCount] = useState(4);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    let count = 4;
    if (screenWidth <= 768) {
      count = 2;
    } else if (screenWidth <= 1024) {
      count = 3;
    }
    setCardCount(count);
  };

  useState(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="App">
        <button className="burger-menu" onClick={toggleSidebar}>
          <BsFilterLeft/>
        </button>
      <div className="content">
      <div className={sidebarOpen ? "sidebar open" : "sidebar"}>
        <SideBarFilter/>
      </div>
      <div className={`main-content ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className={`card-container ${`cols-${cardCount}`}`}>
         {filteredProductListing.map((shoeData) => (
         <ProductCard {...shoeData} key={shoeData._id} />))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Store;
