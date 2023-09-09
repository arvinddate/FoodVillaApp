import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem/cartItem';
import { clearCart } from '../../Utils/cartSlice';

const Cart = () => {
  const cartItems=useSelector((store)=>store.cart.items);
  const dispatch =useDispatch();
  console.log(cartItems);
  const clearCartItems=()=>{
    dispatch(clearCart());
    
  }

  return (
    <div>
      <h1> cart items-{cartItems.length}</h1>
      <button onClick={()=>clearCartItems()}> clear cart</button>
      {cartItems.map((item)=>(
        <CartItem key={item.id} {...item} />
      ))}
      
    </div>
  )
}

export default Cart