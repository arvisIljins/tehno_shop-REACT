import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export default class NavigationBarTop extends Component {
  state = {
    navbarOpen: false,
  };
  mobileNavOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    return (
      <Header>
        <h3 className='header__logo'>
          TechnoShops<span>.com</span>
        </h3>
        <button
          type='button'
          className='navigation__btn'
          onClick={this.mobileNavOpen}>
          <span
            className={
              this.state.isOpen ? 'navigation__icon--close' : 'navigation__icon'
            }>
            &nbsp;
          </span>
        </button>
        <nav className='header__nav'>
          <ul
            className={
              this.state.isOpen
                ? 'header__list header__list-show'
                : 'header__list header__list-hide'
            }>
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
  }
}

const Header = styled.header`
  background-color: var(--baseColor-Dark);

  .header__list-show {
    height: 35rem;
    animation-name: showNavigation;
    animation-duration: 0.7s;
    animation-timing-function: ease-in-out;
  }
  @keyframes showNavigation {
    0% {
      opacity: 0;
      height: 6rem;
    }
    100% {
      opacity: 1;
      height: 35rem;
    }
  }
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
      color: var(--baseColor-Light);

      :hover {
        color: var(--baseColor-Light-2);
      }
    }
  }

  //Mobile nav icon
  .navigation__btn {
    margin: 0 auto;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 2.5rem;
    color: var(--baseColor-Light);
    display: none;
  }
  .navigation__icon {
    position: relative;
    margin-top: 2rem;
    width: 3rem;
    height: 0.2rem;
    background-color: var(--baseColor-Light);
    display: inline-block;
    ::before,
    ::after {
      width: 3rem;
      height: 0.2rem;
      background-color: var(--baseColor-Light);
      display: inline-block;
    }
    ::before,
    ::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }
    ::before {
      top: -1rem;
    }
    ::after {
      top: 1rem;
    }
  }
  .navigation__icon:hover {
    background-color: var(--baseColor-Light-2);
  }
  .navigation__icon:hover::before {
    top: -1.2rem;
    background-color: var(--baseColor-Light-2);
  }
  .navigation__icon:hover::after {
    top: 1.2rem;
    background-color: var(--baseColor-Light-2);
  }
  //Close
  .navigation__icon--close {
    position: relative;
    margin-top: 2rem;
    width: 3rem;
    height: 0.2rem;
    background-color: transparent;
    display: inline-block;
    ::before,
    ::after {
      width: 3rem;
      height: 0.2rem;
      background-color: var(--baseColor-Light);
      display: inline-block;
    }
    ::before,
    ::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }
    ::before {
      transform: rotate(135deg);
      top: 0rem;
    }
    ::after {
      transform: rotate(-135deg);
      top: 0rem;
    }
  }
  .navigation__icon--close:hover::before {
    background-color: var(--baseColor-Light-2);
  }
  .navigation__icon--close:hover::after {
    background-color: var(--baseColor-Light-2);
  }
  @media screen and (max-width: 43.75em) {
    .navigation__btn {
      display: block;
    }
    .header__list {
      display: block;
      text-align: center;
    }

    .header__list__catalog {
      display: block;
    }
    .header__list__login {
      display: block;
    }
    .header__list-hide {
      display: none;
    }
  }
`;
