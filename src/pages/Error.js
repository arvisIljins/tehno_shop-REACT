import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
const Error = () => {
  return (
    <PageTransition>
      <Container>
        <h1>Sorry the URL you insert does not exist!</h1>
        <div className='wrapper'>
          <Button>
            <Link to='/'>Go back to home</Link>
          </Button>
        </div>
      </Container>
    </PageTransition>
  );
};

export default Error;

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
