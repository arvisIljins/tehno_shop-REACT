import React from 'react';
import styled from 'styled-components';
import { VscFoldUp } from 'react-icons/vsc';

const BackToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

const ScrollButton = () => {
  return (
    <Button onClick={BackToTop}>
      <VscFoldUp />
    </Button>
  );
};

export default ScrollButton;

const Button = styled.button`
  z-index: 9999;
  display: block;
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  padding: 0.5rem 1rem;
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
  }
`;
