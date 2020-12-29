import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <Section>
      <h3 className='footer_logo'>
        TechnoShops<span>.com</span>
      </h3>
      <div className='footer_button_container'>
        <Link to='/' className='footer_buttons'>
          Home
        </Link>
        <Link to='/products' className='footer_buttons'>
          Products
        </Link>
        <Link to='/about' className='footer_buttons'>
          About
        </Link>
        <Link to='/login' className='footer_buttons'>
          Login
        </Link>
        <Link to='/cart' className='footer_buttons'>
          Cart
        </Link>
      </div>
      <h4 className='footer_copyrights'>
        Copyright © 2020 All Rights Reserved By TechnoShop.com
      </h4>
    </Section>
  );
};

export default Footer;

const Section = styled.section`
  background-color: var(--baseColor-Dark);
  padding: 2rem;
  margin-top: 2rem;
  .footer_logo {
    font-family: 'Nerko One', cursive;
    font-size: 4rem;
    text-align: center;
    span {
      color: var(--baseColor-Light);
    }
  }
  .footer_copyrights {
    text-align: center;
    font-size: 1.5rem;
  }
  .footer_button_container {
    max-width: 60rem;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    grid-gap: 1rem;
    justify-items: center;
  }
  .footer_buttons {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border: solid 0.1rem var(--baseColor-Light-2);
    background-color: transparent;
    transition: all 0.3s;
    color: var(--baseColor-Light-2);
    text-decoration: none;
    color: var(--baseColor-Light-2);
    cursor: pointer;
    :hover {
      background-color: var(--baseColor-Light);
      transform: translateY(-0.3rem);
    }
  }
  @media screen and (max-width: 25em) {
    .footer_logo {
      font-size: 3rem;
    }
    .footer_copyrights {
      font-size: 1rem;
    }
    .footer_button_container {
      grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
    }
  }
`;
