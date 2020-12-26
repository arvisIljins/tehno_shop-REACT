import React, { useContext } from 'react';
import { CartContext } from '../../context/cart';

const CartAmount = () => {
  const { cartItem } = useContext(CartContext);
  return cartItem === 0 ? <p></p> : <p>{cartItem}</p>;
};

export default CartAmount;
