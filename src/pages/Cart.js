import React, { useContext } from 'react';
import CartItem from '../components/cart/CartItem';
import EmptyCart from '../components/cart/EmptyCart';
import { CartContext } from '../context/cart';
import Button from '../components/Button';
import styled from 'styled-components';
const Cart = () => {
  let user = false;
  const { subTotal, cart, removeAllItems, totalShipping } = useContext(
    CartContext
  );

  //Taxis
  let taxis = (subTotal + totalShipping) * 0.21;
  taxis = parseFloat(taxis.toFixed(2));

  // console.log({ cart });
  return cart <= 0 ? (
    <EmptyCart />
  ) : (
    <Section>
      <h1 className='title'>Shopping cart</h1>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <h2 className='cart_total cart_total-average'>Subtotal: € {subTotal}</h2>
      <h2 className='cart_total cart_total-small'>
        + Shipping: € {totalShipping}
      </h2>
      <h2 className='cart_total cart_total-small'>
        21% tax included: € {taxis}
      </h2>
      <Button to={user ? '/checkout' : '/login'}>
        {user ? 'Checkout' : 'Login'}
      </Button>
      <br />
      <Button
        onClick={() => {
          removeAllItems();
        }}
      >
        Remove all
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
    padding: 0 2rem;
    text-align: right;
  }
  .cart_total-small {
    font-size: 1.5rem;
    color: var(--baseColor-Light);
  }
  .cart_total-average {
    font-size: 2rem;
    color: var(--baseColor-Light);
  }
  .cart_total-big {
    font-size: 3rem;
  }
  .title {
    padding: 1rem 0;
    font-size: 4rem;
    text-align: center;
    color: var(--baseColor-Light);
  }

  @media screen and (max-width: 29em) {
    margin: 1rem auto;
    padding: 1rem 0.5rem;
    .cart_total {
      font-size: 2rem;
    }
    .title {
      font-size: 3rem;
    }
  }
`;
