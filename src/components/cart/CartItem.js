import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../../context/products';
import styled from 'styled-components';

const CartItem = ({ image, title, price }) => {
  return (
    <Section>
      <img className='item_picture' src={image} alt={title} />
      <h1 className='item_title'>{title}</h1>
      <h3 className='item-price'>€ {price}</h3>
    </Section>
  );
};

export default CartItem;

const Section = styled.section`
  padding: 1rem;
  background-color: rgba(5.1, 3.9, 4.7, 0.2);
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
    padding: 0 2rem;
    text-align: right;
    flex-grow: 1;
  }

  @media screen and (max-width: 25em) {
    .title {
      font-size: 1rem;
    }
    .item-price {
      font-size: 1.5rem;
    }
  }
`;
