import React, { useContext } from 'react';
import CartItem from '../components/cart/CartItem';
import EmptyCart from '../components/cart/EmptyCart';
import { CartContext } from '../context/cart';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
const Cart = () => {
  let user = false;
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
      <h2>€ {total}</h2>
      <Button to={user ? '/checkout' : '/login'}>
        {user ? 'Checkout' : 'Login'}
      </Button>
    </section>
  );
};

export default Cart;
