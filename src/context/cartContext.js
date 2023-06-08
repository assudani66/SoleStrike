import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const notify = (message) => toast(message);

const cartContext = createContext()

const CartContextProvider = (props) => {

  const localToken = localStorage.getItem("token");

  const getCart = async() =>{
    try{
      const response = await fetch("/api/user/cart",{
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


    const cartReducer = (cart,action) => {

      switch (action.type) {
        case "addItem":
          return action.payload
        case "loadCart":
        return action.payload
        default:
          return cart
      }
    }

    const [cart,cartDispatch] = useReducer(cartReducer,[])

    const itemExistInCart = (selectedProductId) => {
      return cart.find(({_id})=> _id === selectedProductId._id) ? true : false
    }

    const addToCart = async (product) => {
      try {
        if(!itemExistInCart(product)){
        const response = await fetch("/api/user/cart", {
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
        notify("Added To Cart")
        cartDispatch({type:"addItem",payload:data.cart,selectedProduct:product})

      }
      } catch (error) {
        console.error(error);
      }
    };

const removeCartItem = async (product) => {
  try {
    const response = await fetch(`/api/user/cart/${product._id}`, {
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
    cartDispatch({type:"addItem",payload:data.cart,selectedProduct:product})
    notify("removed from Cart")
  } catch (error) {
    console.error(error);
  }
}
const updateItemQuantity = async (product,type) => {

  try {
    if(product.qty >= 1){
    const response = await fetch(`/api/user/cart/${product._id}`, {
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
    cartDispatch({type:"addItem",payload:data.cart,selectedProduct:product})
    console.log(data.cart)
  }
  } catch (error) {
    console.error(error);
  }
}
    useEffect(()=>{
      getCart()
      console.log(cart)
    },[])
    return (
    <cartContext.Provider value={{addToCart,cart,removeCartItem,updateItemQuantity}}>
        {props.children}
    </cartContext.Provider>
  )
}

export const useCart = () => useContext(cartContext)

export default CartContextProvider

