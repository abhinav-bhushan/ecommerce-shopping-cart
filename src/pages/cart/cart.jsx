import React, { useContext } from 'react'
import ShopContext from '../../context/shop-context'
import {PRODUCTS} from '../../products'
import CartItem from './cart-item'
import { useNavigate } from 'react-router-dom'
import './cart.css'

const Cart = () => {
  const {cartItems,getTotalCartAmount}=useContext(ShopContext)
  const navigate=useNavigate()
  const totalAmount=getTotalCartAmount();
  return (
    <div className="cart">
      <h1>Your Cart Items</h1>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id]>0)
            return <CartItem data={product}/>
        })}
      </div>
      {totalAmount>0?
          (<div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={()=>navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>):<h1>Your Cart is Empty</h1>}
    </div>
  )
}

export default Cart
