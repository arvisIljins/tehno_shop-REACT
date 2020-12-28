import React, { createContext, useEffect } from 'react';

const getCartFromLocalStorage = () => {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(getCartFromLocalStorage());
  const [total, setTotal] = React.useState(0);
  const [cartItem, setCartItem] = React.useState(0);

  useEffect(() => {
    //Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));
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
        total,
        cartItem,
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
