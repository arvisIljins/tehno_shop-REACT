import React, { createContext, useEffect } from 'react';
import TestCart from '../utils/TestCart';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(TestCart);
  const [total, setTotal] = React.useState(0);
  const [cartItem, setCartItem] = React.useState(0);

  useEffect(() => {
    //set total amount
    let newCartItem = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItem(newCartItem);
    //set total
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
    // Delete item
  }, [cart]);

  //Delete Item
  const deleteItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, total, cartItem, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
