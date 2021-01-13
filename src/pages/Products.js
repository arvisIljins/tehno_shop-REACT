import React, { useContext } from 'react';
import Loading from '../components/Loading';
import PageProducts from '../components/Products/PageProducts';
import ProductFilter from '../components/Products/ProductFilter';
import { ProductContext } from '../context/products';
import styled from 'styled-components';
import PageTransition from '../components/PageTransition';

const Products = () => {
  const { loading } = useContext(ProductContext);
  return loading ? (
    <Loading />
  ) : (
    <PageTransition>
      <SectionTile>All Products</SectionTile>
      <Section>
        <ProductFilter />
        <PageProducts />
      </Section>
    </PageTransition>
  );
};

export default Products;

const Section = styled.section`
  max-width: 150rem;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: 56.25em) {
    display: block;
  }
`;
const SectionTile = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  margin-top: 2rem;
`;
