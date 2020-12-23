import React, { useContext } from 'react';
import CartItem from '../components/cart/CartItem';
import EmptyCart from '../components/cart/EmptyCart';
import { CartContext } from '../context/cart';
import Button from '../components/Button';
import styled from 'styled-components';

const Cart = () => {
  let user = false;
  const { total, cart } = useContext(CartContext);
  //console.log({ total, cart });
  return cart <= 0 ? (
    <EmptyCart />
  ) : (
    <Section>
      <h1 className='title'>Shopping cart</h1>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <h2 className='cart_total'>Total: € {total}</h2>
      <Button to={user ? '/checkout' : '/login'}>
        {user ? 'Checkout' : 'Login'}
      </Button>
    </Section>
  );
};

export default Cart;

const Section = styled.section`
  max-width: 110rem;
  margin: 3rem auto;
  padding: 2rem;
  background-color: var(--baseColor-Dark-2);

  .cart_total {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.2rem;
    font-size: 3rem;
    padding: 0 2rem;
    text-align: right;
  }
  .title {
    padding: 1rem 0;
    font-size: 4rem;
    text-align: center;
    color: var(--baseColor-Light);
  }
`;
