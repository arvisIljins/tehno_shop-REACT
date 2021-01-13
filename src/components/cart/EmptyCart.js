import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button';
import PageTransition from '../PageTransition';
const EmptyCart = () => {
  return (
    <PageTransition>
      <Container>
        <h1>Your cart currently is empty!</h1>
        <div className='wrapper'>
          <Button>
            <Link to='/products'>Go back to products</Link>
          </Button>
        </div>
      </Container>
    </PageTransition>
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
