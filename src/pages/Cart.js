import React, { useContext } from 'react';
import CartItem from '../components/cart/CartItem';
import EmptyCart from '../components/cart/EmptyCart';
import { CartContext } from '../context/cart';
import Button from '../components/Button';
import styled from 'styled-components';
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom';
const Cart = () => {
  const { subTotal, cart, removeAllItems, totalShipping } = useContext(
    CartContext
  );
  const { user } = useContext(UserContext);
  //Taxis
  let taxis = (subTotal + totalShipping) * 0.21;
  taxis = parseFloat(taxis.toFixed(2));

  //Total
  let total = subTotal + totalShipping;
  total = parseFloat(total.toFixed(2));
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
      <h2 className='cart_total cart_total-big'>Total: € {total}</h2>
      <Link className='button' to={user.token ? '/checkout' : '/login'}>
        {user.token ? 'Checkout' : 'Login'}
      </Link>
      <br />
      <Button
        style={{ marginTop: '2rem' }}
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

  .button {
    text-transform: uppercase;
    padding: 0.7rem 1.8rem;
    font-size: 3rem;
    border: solid 0.1rem var(--baseColor-Light-2);
    background-color: transparent;
    transition: all 0.3s;
    color: var(--baseColor-Light-2);
    cursor: pointer;
    text-decoration: none;
    :hover {
      background-color: var(--baseColor-Light);
      transform: translateY(-0.3rem);
    }
  }
  @media screen and (max-width: 43.75em) {
    .button {
      padding: 0.8rem 1.5rem;
      font-size: 2rem;
    }
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
    .cart_total-small {
      font-size: 1rem;
    }
    .cart_total-average {
      font-size: 1.5rem;
    }
    .cart_total-big {
      font-size: 2rem;
    }
    .cart_total {
      padding: 0 0.5rem;
    }
  }
`;
