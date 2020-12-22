import React, { useContext } from 'react';
import EmptyCart from '../components/cart/EmptyCart';
import { CartContext } from '../context/cart';

const Cart = () => {
  const { total, cart } = useContext(CartContext);
  //console.log({ total, cart });
  return cart <= 0 ? <EmptyCart /> : <div>Cart</div>;
};

export default Cart;
