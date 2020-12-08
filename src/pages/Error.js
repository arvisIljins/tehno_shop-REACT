import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Container>
      <h1>Sorry the URL you insert does not exist!</h1>
      <button>
        {' '}
        <Link to='/'>Go back to home</Link>
      </button>
    </Container>
  );
};

export default Error;

const Container = styled.section`
  max-width: 140rem;
  min-height: 70vh;
  margin: 4rem auto;
  h1 {
    text-align: center;
    font-size: 4rem;
  }
  a {
    text-decoration: none;
    color: var(--baseColor-Light-2);
  }
  button {
    display: block;
    padding: 1.5rem 2rem;
    font-size: 3rem;
    border: solid 0.1rem var(--baseColor-Light-2);
    margin: 2rem auto;
    background-color: transparent;
    transition: all 0.3s;

    :hover {
      background-color: var(--baseColor-Light);
      transform: translateY(-0.3rem);
    }
  }
`;
