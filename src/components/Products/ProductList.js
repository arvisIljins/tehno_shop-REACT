import React from 'react';
import Product from './Product';
import styled from 'styled-components';
const ProductList = ({ title, products }) => {
  return (
    <React.Fragment>
      <Tile>{title}</Tile>
      <Section>
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </Section>
    </React.Fragment>
  );
};

export default ProductList;

const Section = styled.section`
  max-width: 140rem;
  padding: 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;

  @media screen and (max-width: 25em) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
`;

const Tile = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  margin: 2rem 0;
`;
