import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'

const wishListContext = createContext()

const WishListContextProvider = (props) => {

  const localToken = localStorage.getItem("token");

  const getwishList = async() =>{
    try{
      const response = await fetch("/api/user/wishlist",{
        method: 'GET',
        headers:{
          'authorization' : localToken,
          'Content-type': 'application/json'
        }
      })
      const responseJSON = await response.json()
      return responseJSON
    }catch(error){
      console.log(error)
    }
  }


    const wishListReducer = (wishList,action) => {

      switch (action.type) {
        case "addItem":
          return action.payload
        case "loadwishList":
        return action.payload
        default:
          return wishList
      }
    }

    const [wishList,wishListDispatch] = useReducer(wishListReducer,[])

    const itemExistInwishList = (selectedProductId) => {
      return wishList.find(({_id})=> _id === selectedProductId._id) ? true : false
    }

    const addTowishList = async (product) => {
      try {
        if(!itemExistInwishList(product)){
        const response = await fetch("/api/user/wishlist", {
          method: 'POST',
          headers: {
            'authorization': localToken,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            product: product,
          }),
        });
        const data = await response.json();
        wishListDispatch({type:"addItem",payload:data.wishlist,selectedProduct:product})
        console.log(data.wishlist)
      }
      } catch (error) {
        console.error(error);
      }
    };

const removeWishListItem = async (product) => {
  try {
    const response = await fetch(`/api/user/wishlist/${product._id}`, {
      method: 'DELETE',
      headers: {
        'authorization': localToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product: product,
      }),
    });
    const data = await response.json();
    wishListDispatch({type:"addItem",payload:data.wishlist,selectedProduct:product})
    console.log(data.wishlist)
  } catch (error) {
    console.error(error);
  }
}
const updateItemQuantity = async (product,type) => {

  try {
    if(product.qty >= 1){
    const response = await fetch(`/api/user/wishlist/${product._id}`, {
      method: 'POST',
      headers: {
        'authorization': localToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       action:{
        type:type
      }
      }),
    });
    const data = await response.json();
    wishListDispatch({type:"addItem",payload:data.wishlist,selectedProduct:product})
    console.log(data.wishlist)
  }
  } catch (error) {
    console.error(error);
  }
}
    useEffect(()=>{
      getwishList()
      console.log(wishList)
    },[])
    return (
    <wishListContext.Provider value={{addTowishList,wishList,removeWishListItem,updateItemQuantity}}>
        {props.children}
    </wishListContext.Provider>
  )
}

export const useWishList = () => useContext(wishListContext)

export default WishListContextProvider

