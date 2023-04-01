import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

const ShopContext=createContext(null)
const getDefaultCart=()=>{
    let cart={}
    for(var i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0
    }
    return cart
}

const ShopContextProvider = ({children}) => {
  const [cartItems,setCartItems]=useState(getDefaultCart())
  const addToCart=(itemId)=>{
        console.log(cartItems)
        setCartItems({...cartItems,[itemId]:cartItems[itemId]+1})
  }

  const removeFromCart=(itemId)=>{
    setCartItems({...cartItems,[itemId]:cartItems[itemId]-1})
  }

  const updateCartItemCount=(newValue,itemId)=>{
    setCartItems({...cartItems,[itemId]:newValue})
  }

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        const product=PRODUCTS.find(p=>p.id===Number(item))
        totalAmount+=cartItems[item]*product.price
      }
    }
    return totalAmount
  }

  const contextValue={cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount}
  return <ShopContext.Provider value={contextValue} >{children}</ShopContext.Provider>

}

export {ShopContextProvider}
export default ShopContext
