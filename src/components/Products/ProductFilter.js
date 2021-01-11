import React from 'react';
import styled from 'styled-components';
const ProductFilter = () => {
  return <Section>Hello from filter</Section>;
};

export default ProductFilter;
const Section = styled.section`
  background-color: var(--baseColor-Dark);
  opacity: 0.7;
  width: 20%;
  margin: 4rem 0;
  margin-left: 2rem;

  @media screen and (max-width: 56.25em) {
    width: 80%;
    margin: 1rem auto;
  }
`;
