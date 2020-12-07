import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
const NavigationBarTop = () => {
  return (
    <Header>
      <h3 className='header__logo'>
        TechnoShops<span>.com</span>
      </h3>
      <nav className='header__nav'>
        <ul className='header__list'>
          <div className='header__list__catalog'>
            <li className='header__list__link'>
              <Link to='/'>Home</Link>
            </li>
            <li className='header__list__link'>
              <Link to='/products'>Products</Link>
            </li>
            <li className='header__list__link'>
              <Link to='/about'>About</Link>
            </li>
          </div>
          <div className='header__list__login'>
            <li className='header__list__link'>
              <Link to='/cart'>Login</Link>
            </li>
            <li className='header__list__link'>
              <Link to='/cart'>
                Cart{' '}
                <span>
                  <FaShoppingCart />
                </span>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </Header>
  );
};

export default NavigationBarTop;

const Header = styled.header`
  background-color: var(--baseColor-Dark);
  .header__logo {
    font-family: 'Nerko One', cursive;
    font-size: 4rem;
    text-align: center;
    span {
      color: var(--baseColor-Light);
    }
  }
  .header__list {
    margin: 0 auto;
    max-width: 100rem;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
  .header__list__catalog {
    display: flex;
  }
  .header__list__login {
    display: flex;
  }

  .header__list__link {
    font-size: 2.5rem;
    padding: 1rem;
    transition: all 0.3s;
    :hover {
      transform: translateY(-0.3rem);
    }

    a {
      text-decoration: none;
      transition: all 0.3s;

      :hover {
        color: var(--baseColor-Light-2);
      }
    }
  }
`;
