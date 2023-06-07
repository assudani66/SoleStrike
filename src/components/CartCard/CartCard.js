import React from 'react';
import { useCart } from '../../context/cartContext';
import { useWishList } from '../../context/wishListContext';
import './cartCard.css';
import { FaTimes } from 'react-icons/fa';
import { AddtoWishListBtn, RemovetoWishListBtn } from '../ProductCard/buttons';
import toast, { Toaster } from 'react-hot-toast';

const notify = (message) => toast(message);
const CartCard = (product) => {
  const {
    _id,
    availableSizes,
    rating,
    image,
    name,
    price,
    originalPrice,
    bgColor,
    availableVariants,
    qty,
    isInCart,
  } = product;

  const checkQuantity = () => {
    if (qty <= 1) {
      return false;
    } else {
      return true;
    }
  };

  const { removeCartItem, updateItemQuantity, addToCart } = useCart();
  const { removeWishListItem } = useWishList();

  const moveToCartFromWishList = (product) => {
    removeWishListItem(product);
    notify("Moved to Cart")
    addToCart(product);
  };

  return (
    <div className="cart productDetails">
      {isInCart && <AddtoWishListBtn product={product}/>}
      {!isInCart && <RemovetoWishListBtn product={product}/>}
      <img className="cart productDetailsImage" src={image} alt={name} />
      <div className="cart productDetailsOptions">
        <div className="baseInfo">
          <h1 className="heading">{name}</h1>
          <p className="description">This is a description</p>
          <p className="rating">{rating[0]}({rating[1]})</p>
        </div>
        <div>
          <h3 className="price"><span className="rupeesSign">₹</span>{price}</h3>
          <hr />
          <div className="sizeContainer">
            <h3>Size</h3>
            <div className="sizeRow">
              {availableSizes.map((size) => (
                <div
                  key={size}
                  value={size}
                  className="cart productDetailsShoeSize"
                >
                  <div className="productDetailShoeSizeText">{size}</div>
                </div>
              ))}
            </div>
            <hr />
            <div className="chooseColorSection">
              <h3>Choose your Color</h3>
              <div className="colorSelection">
                {availableVariants.map(({ color, name }) => (
                  <div
                    key={color}
                    className="cart colorOption"
                    style={{ backgroundColor: `${color}` }}
                  ></div>
                ))}
              </div>
              
              {isInCart && (
                <div className="quantitySection">
                  <button className='quantityButton' onClick={() => updateItemQuantity(product, "increment")}>
                    +
                  </button>
                  <p>{checkQuantity ? qty : 1}</p>
                  {checkQuantity() && (
                    <button onClick={() => updateItemQuantity(product, "decrement")}>
                      -
                    </button>
                  )}
                  <button onClick={() => removeCartItem(product)} className="removeButton">
                    <FaTimes />RemoveItem
                  </button>
                </div>
              )}
              {!isInCart && (
                <div>
                  <button onClick={() => moveToCartFromWishList(product)}>
                    Move to Cart
                  </button>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
