import React, { useContext } from 'react';
import CartItem from '../components/cart/CartItem';
import EmptyCart from '../components/cart/EmptyCart';
import { CartContext } from '../context/cart';

const Cart = () => {
  const { total, cart } = useContext(CartContext);
  //console.log({ total, cart });
  return cart <= 0 ? (
    <EmptyCart />
  ) : (
    <section>
      <h2>Shopping cart</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Cart;
