import React from 'react';
import styled from 'styled-components';

const CheckOutItem = ({ amount, image, title, price, Shipping }) => {
  return (
    <Section>
      <h1 className='item_title'>&#215;{amount}</h1>
      <img className='item_picture' src={image} alt={title} />
      <h1 className='item_title'>{title}</h1>
      <div className='item-coust'>
        <h3 className='item-price'>€ {price}</h3>
        <h3 className='item-shipping'>
          {Shipping === null ? 'Free shipping' : `+ shipping € ${Shipping}`}
        </h3>
      </div>
    </Section>
  );
};

export default CheckOutItem;

const Section = styled.section`
  padding: 0.4rem;
  background-color: var(--overlay-color);
  margin: 0.5rem;
  display: flex;
  align-items: center;
  transition: all 0.3s;

  .item_picture {
    height: 5rem;
    width: 5rem;
    object-fit: contain;
    transition: all 0.3s;
  }

  .item_title {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.2rem;
    display: inline-block;
    font-size: 1.5rem;
    padding: 0 1rem;
  }
  .item-price {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.2rem;
    font-size: 2rem;
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
    font-size: 0.7rem;
  }

  @media screen and (max-width: 29em) {
    padding: 0.5rem;
    margin: 0;
    .item_title {
      font-size: 1rem;
      padding: 0 0.5rem;
    }
    .item-price {
      font-size: 1rem;
    }
    .item-shipping {
      font-size: 0.5rem;
    }
  }
`;
