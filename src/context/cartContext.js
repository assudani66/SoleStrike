import React, { createContext, useContext, useState } from 'react'

const cartContext = createContext()


const CartContextProvider = (props) => {

    const [shoesData] = useState()
    const [cart] = useState()
    
    return (
    <cartContext.Provider value={{cart,shoesData}}>
        {props.children}
    </cartContext.Provider>
  )
}

export const useCart = () => useContext(cartContext)

export default CartContextProvider

