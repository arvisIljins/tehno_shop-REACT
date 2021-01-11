import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../../context/products';
import ProductList from './ProductList';

const PageProducts = () => {
  const { sorted, products } = useContext(ProductContext);
  return (
    <Section>
      <ProductList products={sorted} />
    </Section>
  );
};

export default PageProducts;
const Section = styled.section`
  width: 80%;

  @media screen and (max-width: 56.25em) {
    width: 100%;
  }
`;
