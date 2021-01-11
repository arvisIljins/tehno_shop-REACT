import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../../context/products';
import Loading from '../Loading';
import ProductList from './ProductList';

const PageProducts = () => {
  const { sorted, products, page } = useContext(ProductContext);
  console.log(sorted);
  return sorted[page] ? (
    <Section>
      <ProductList products={sorted[page]} />
    </Section>
  ) : (
    <Loading />
  );
};

export default PageProducts;
const Section = styled.section`
  width: 80%;

  @media screen and (max-width: 56.25em) {
    width: 100%;
  }
`;
