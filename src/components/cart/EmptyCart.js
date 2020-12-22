import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button';
const EmptyCart = () => {
  return (
    <Container>
      <h1>Your cart currently is empty!</h1>
      <div className='wrapper'>
        <Button>
          <Link to='/products'>Go back to products</Link>
        </Button>
      </div>
    </Container>
  );
};

export default EmptyCart;

const Container = styled.section`
  max-width: 140rem;
  min-height: 70vh;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 4rem;
  }
  .wrapper {
    margin: 2rem auto;
  }
`;
