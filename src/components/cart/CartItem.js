import React, { useContext } from 'react';
//import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../../context/cart';
import styled from 'styled-components';

const CartItem = ({ id, amount, image, title, price, Shipping }) => {
  const { deleteItem, increaseAmount, decreaseAmount } = useContext(
    CartContext
  );

  return (
    <Section>
      <img className='item_picture' src={image} alt={title} />
      <h1 className='item_title'>{title}</h1>
      <div className='item-coust'>
        <h3 className='item-price'>€ {price}</h3>
        <h3 className='item-shipping'>
          {Shipping === null ? 'Free shipping' : `+ shipping € ${Shipping}`}
        </h3>
      </div>
      <div className='item_update'>
        <button
          onClick={() => {
            increaseAmount(id);
          }}
          className='item_update-button'
        >
          &#43;
        </button>
        <p className='item_update-count'>{amount}</p>
        <button
          onClick={() => {
            decreaseAmount(id, amount);
          }}
          className='item_update-button'
        >
          &#8722;
        </button>
      </div>
      <button
        onClick={() => {
          deleteItem(id);
        }}
        className='item_update-button red'
      >
        &#215;
      </button>
    </Section>
  );
};

export default CartItem;

const Section = styled.section`
  padding: 1rem;
  background-color: var(--overlay-color);
  margin: 0.5rem;
  display: flex;
  align-items: center;
  transition: all 0.3s;

  :hover {
    transform: scale(1.05);
    background-color: rgba(5.1, 3.9, 4.7, 0.4);
  }

  .item_picture {
    width: 7rem;
    transition: all 0.3s;

    :hover {
      transform: scale(2);
    }
  }

  .item_title {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.2rem;
    display: inline-block;
    font-size: 2rem;
    padding: 0 2rem;
  }
  .item-price {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.2rem;
    font-size: 3rem;
  }
  .item-coust {
    text-align: right;
    flex-grow: 1;
    padding: 0 1rem;
  }
  .item-shipping {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.2rem;
    font-size: 1rem;
  }
  .item_update {
    display: block;
  }
  .item_update-button {
    font-weight: 700;
    font-size: 2rem;
    margin: 0.2rem 1rem;
    text-align: right;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: var(--baseColor-Light);

    :hover {
      color: var(--baseColor-Light-2);
    }
  }
  .item_update-count {
    font-weight: 300;
    font-size: 2rem;
    margin: 0 1rem;
    text-align: right;
    border: none;
    color: var(--baseColor-Light);
  }

  .red {
    color: #ff0a339f;
    font-size: 3rem;
  }

  @media screen and (max-width: 29em) {
    padding: 0.5rem;
    margin: 0;
    .item_title {
      font-size: 1rem;
    }
    .item-price {
      font-size: 1.5rem;
    }
    .item_picture {
      width: 5rem;
    }
    .item_update-count {
      font-size: 1.5rem;
      margin: 0 0.5rem;
    }
    .item_update-button {
      font-size: 1.5rem;
      margin: 0 0.5rem;
    }

    .red {
      font-size: 1.5rem;
    }
  }
`;
