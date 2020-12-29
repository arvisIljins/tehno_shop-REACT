import React, { createContext, useEffect } from 'react';

const getCartFromLocalStorage = () => {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(getCartFromLocalStorage());
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

  //Delete Item
  const deleteItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
  };
  // Increase amount
  const increaseAmount = (id) => {
    setCart(
      [...cart].map((item) => {
        return item.id === id
          ? {
              ...item,
              amount: item.amount + 1,
            }
          : { ...item };
      })
    );
  };

  //Decrease amount
  const decreaseAmount = (id, amount) => {
    return amount === 1
      ? deleteItem(id)
      : setCart(
          [...cart].map((item) => {
            return item.id === id
              ? {
                  ...item,
                  amount: item.amount - 1,
                }
              : { ...item };
          })
        );
  };

  //Remove all items from cart
  const removeAllItems = () => {
    setCart([]);
  };

  //Add to cart
  const addToCart = (product) => {
    const {
      id,
      title,
      price,
      Shipping,
      image: { url },
    } = product;
    const item = [...cart].find((item) => item.id === id);

    if (item) {
      increaseAmount(id);
    } else {
      const newItem = {
        id,
        title,
        price,
        Shipping,
        image: url,
        amount: 1,
      };
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  };
  return (
    <CartContext.Provider
      value={{
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
