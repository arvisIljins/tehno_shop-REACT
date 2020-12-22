import React, { useContext } from 'react';
import { CartContext } from '../context/cart';

const Cart = () => {
  const { total, cart } = useContext(CartContext);
  console.log({ total, cart });
  return <div>Cart</div>;
};

export default Cart;
