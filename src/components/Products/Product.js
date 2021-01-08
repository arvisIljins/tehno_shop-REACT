import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import freeShippingImg from '../../images/freeShipping.png';

const Product = ({ id, title, image, price, Shipping }) => {
  const url = image.url;
  return (
    <Section>
      {Shipping === null && (
        <FreeShipping>
          <img
            className='free_shipping-image'
            src={freeShippingImg}
            alt='free shipping'
          />
        </FreeShipping>
      )}
      <img className='product-image' src={url} alt={title} />
      <h1 className='title'>{title}</h1>
      <h4 className='price'>€{price}</h4>
      <Link to={`products/${id}`} className='button'>
        Details
      </Link>
    </Section>
  );
};

export default Product;

const FreeShipping = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  max-width: 10rem;

  .free_shipping-image {
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
  @media screen and (max-width: 25em) {
    max-width: 7rem;
  }
`;

const Section = styled.section`
  background-color: var(--baseColor-Dark);
  padding: 2rem;
  overflow: hidden;
  transition: all 0.3s;
  position: relative;

  :hover {
    box-shadow: 0 0 1rem 1px var(--baseColor-Dark);
    transform: scale(1.1) translateY(-0.5rem);
    background: rgba(0, 0, 0, 0.8);
  }
  :hover .button {
    display: block;
    transform: translate(-50%, -50%) scale(1);
  }
  :hover img {
    opacity: 0.3;
  }
  :hover .price {
    transform: scale(1);
    animation: pulse 0.7s infinite;
  }
  .button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(0);
    transition: all 0.3s linear;
    padding: 1.5rem 2rem;
    font-size: 3rem;
    border: solid 0.1rem var(--baseColor-Light-2);
    background-color: transparent;
    :hover {
      background-color: var(--baseColor-Light);
    }
  }
  a {
    text-decoration: none;
    color: var(--baseColor-Light-2);
  }
  .product-image {
    display: block;
    padding: 2rem;
    width: auto;
    max-height: 25rem;
    margin: 0 auto;
  }
  .title {
    font-size: 1.5rem;
  }
  .price {
    font-size: 2rem;
    overflow: hidden;
    outline: hidden;
  }
  //Animation
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      color: var(--baseColor-Light);
    }

    70% {
      transform: scale(1);
      color: var(--baseColor-Light-2);
    }

    100% {
      transform: scale(0.95);
      color: var(--baseColor-Light);
    }
  }
  @media screen and (max-width: 43.75em) {
    .button {
      padding: 1.5rem 2rem;
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 25em) {
    .product-image {
      width: 100%;
      padding: 0.5rem;
    }
  }
`;
