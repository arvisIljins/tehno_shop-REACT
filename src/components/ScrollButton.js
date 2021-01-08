import React from 'react';
import styled from 'styled-components';
import { VscFoldUp } from 'react-icons/vsc';

const ScrollButton = () => {
  return (
    <Button>
      <VscFoldUp />
    </Button>
  );
};

export default ScrollButton;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 2rem;
  border-radius: 70%;
  border: none;
  font-size: 4rem;
  color: var(--baseColor-Dark);
  background-color: var(--baseColor-Light);
  box-shadow: 1rem 1rem 1rem var(--baseColor-Dark);

  :hover {
    box-shadow: 0.5rem 0.5rem 1rem var(--baseColor-Dark);
    transform: translateY(0.3rem);
  }

  :focus {
    outline: none;
    box-shadow: 1rem 1rem 1rem var(--baseColor-Dark);
    transform: translateY(0);
  }
`;
