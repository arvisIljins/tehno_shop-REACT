import React, { createContext } from 'react';
import TestCart from '../utils/TestCart';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(TestCart);
  const [total, setTotal] = React.useState(0);
  const [cartItem, setCartItem] = React.useState(0);
  return (
    <CartContext.Provider value={{ cart, total, cartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
