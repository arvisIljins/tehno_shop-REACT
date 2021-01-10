import React, { createContext, useEffect } from 'react';

import reducer from './reducer';

const getCartFromLocalStorage = () => {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = React.useReducer(reducer, getCartFromLocalStorage());
  const [subTotal, setSubTotal] = React.useState(0);
  const [cartItem, setCartItem] = React.useState(0);
  const [totalShipping, setShipping] = React.useState(0);

  useEffect(() => {
    //Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));

    //set total amount
    let newCartItem = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItem(newCartItem);

    //set Subtotal
    let newSubTotal = cart.reduce((subTotal, cartItem) => {
      return (subTotal += cartItem.amount * cartItem.price);
    }, 0);
    newSubTotal = parseFloat(newSubTotal.toFixed(2));
    setSubTotal(newSubTotal);
    //set Total

    //set total shipping
    let newTotalShipping = cart.reduce((totalShipping, cartItem) => {
      return (totalShipping += cartItem.amount * cartItem.Shipping);
    }, 0);
    newTotalShipping = parseFloat(newTotalShipping.toFixed(2));
    setShipping(newTotalShipping);
  }, [cart]);

  // Total price
  let total = subTotal + totalShipping;
  total = parseFloat(total.toFixed(2));
  //Taxis
  let taxis = (subTotal + totalShipping) * 0.21;
  taxis = parseFloat(taxis.toFixed(2));

  ////////////////////////////////
  //Delete Item
  const deleteItem = (id) => {
    dispatch({ type: 'DELETE', id: id });
  };
  // Increase amount
  const increaseAmount = (id) => {
    dispatch({ type: 'INCREASE', id: id });
  };

  //Decrease amount
  const decreaseAmount = (id, amount) => {
    return amount === 1
      ? dispatch({ type: 'DELETE', id: id })
      : dispatch({ type: 'DECREASE', id: id });
  };

  //Remove all items from cart
  const removeAllItems = () => {
    dispatch({ type: 'CLEARCART' });
  };

  //Add to cart
  const addToCart = (product) => {
    const item = [...cart].find((item) => item.id === product.id);
    if (item) {
      dispatch({ type: 'INCREASE', id: product.id });
    } else {
      dispatch({ type: 'ADDTOCART', id: product });
    }
  };

  return (
    <CartContext.Provider
      value={{
        total,
        taxis,
        cart,
        subTotal,
        cartItem,
        totalShipping,
        deleteItem,
        increaseAmount,
        decreaseAmount,
        removeAllItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
