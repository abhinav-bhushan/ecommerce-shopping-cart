import React,{useContext, useState} from 'react'
import ShopContext from '../../context/shop-context'

const CartItem = ({data}) => {
  const {id,productName,price,productImage}=data
  const {cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(ShopContext)
  
  return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <div className="description">
            <p>{" "}<b> {productName}</b> </p>
            <p>${price}</p>
            <div className='countHandler'>
              <button onClick={()=>removeFromCart(id)}>-</button>
              <input type="number" onChange={(e)=>updateCartItemCount(e.target.value,id)}  value={cartItems[id]}/>
              <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>

  )
}

export default CartItem
