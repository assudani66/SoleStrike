// import React from 'react';


// const Store = () => {
//   

//   return (
//     <div className="store-container">
//       <div className="burger-menu">
//         <span className="burger-line" />
//         <span className="burger-line" />
//         <span className="burger-line" />
//       </div>
//       <SideBarComponent />
//       <div className="product-list">
//         {filteredProductListing.map((shoeData) => (
//           <ProductCard {...shoeData} key={shoeData._id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Store;

import React, { useState } from "react";
import "./store.css";
// import SideBarFilter from '../components/Filters/SideBarFilter';
import { useFilterContext } from '../../context/filterContext';
import SideBarComponent from '../../components/Filters/SideBarUpdatedDesign';

import ProductCard from '../../components/ProductCard/ProductCard';
import SideBarFilter from "../../components/Filters/SideBarFilter";

const Store = () => {
  const { filteredProductListing } = useFilterContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [videoList, setVideoList] = useState([]);
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

  const loadVideoList = () => {
    if (sidebarOpen) {
      setTimeout(() => {
        setVideoList(["Video 1", "Video 2", "Video 3"]);
      }, 0);
    } else {
      setVideoList([]);
    }
  };

  // Load video list on initial render
  useState(loadVideoList);

  // Listen for window resize event
  useState(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="App">
        <button className="burger-menu" onClick={toggleSidebar}>
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      <div className="content">
      <div className={sidebarOpen ? "sidebar open" : "sidebar"}>
        <SideBarFilter/>

      </div>
      <div className={`main-content ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className={`card-container ${`cols-${cardCount}`}`}>
         {filteredProductListing.map((shoeData) => (
         <ProductCard {...shoeData} key={shoeData._id} />
        ))}

        </div>
      </div>
      </div>
    </div>
  );
};

export default Store;
