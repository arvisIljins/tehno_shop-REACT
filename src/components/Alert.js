import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../context/user';

const Alert = () => {
  const { closeAlert, alert } = useContext(UserContext);

  if (alert.show) {
    return (
      <Popup>
        <Section>
          <button className='close_button' onClick={closeAlert}>
            &#10005;
          </button>
          <div className='container'>
            <h2 className='message'>{alert.show && alert.message}</h2>
          </div>
          {alert.type === 'logIn' && (
            <Link to='/products' onClick={closeAlert} className='button'>
              Shop now
            </Link>
          )}
        </Section>
      </Popup>
    );
  } else {
    return <p className='hide'></p>;
  }
};

export default Alert;
const Popup = styled.div`
  z-index: 99999;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  backdrop-filter: blur(6px);
  animation-name: growIn;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;

  //animation
  @keyframes growIn {
    0% {
      opacity: 0;
      transform: scale(0) translateY(15rem);
    }

    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;
const Section = styled.section`
  border-radius: 5%;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: calc(50vh - 22rem) auto;
  max-width: 45rem;
  background-color: var(--baseColor-Dark);
  padding: 5rem 2rem;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0 0 1rem 1px var(--baseColor-Light-2);

  .close_button,
  .close_button:active {
    outline: none;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    font-size: 3rem;
    border: none;
    background-color: transparent;
    transition: all 0.3s;
    color: var(--baseColor-Light-2);
    cursor: pointer;
    :hover {
      color: var(--baseColor-Light);
      transform: translateY(-0.3rem);
    }
  }

  .message {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
    padding: 2rem 2rem;
    font-size: 2rem;
  }
  .hide {
    display: none;
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
`;
