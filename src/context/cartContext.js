import React, { createContext, useContext, useEffect, useState } from 'react'
import { useProductData } from '../hooks/useProductData'

const cartContext = createContext()


const CartContextProvider = (props) => {

    const [shoesData,setShoesData] = useState()
    const [cart,setCart] = useState()
    
    return (
    <cartContext.Provider value={{cart,shoesData}}>
        {props.children}
    </cartContext.Provider>
  )
}

export const useCart = () => useContext(cartContext)

export default CartContextProvider

