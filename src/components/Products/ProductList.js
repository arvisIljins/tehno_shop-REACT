import React from 'react';
import Product from './Product';
import styled from 'styled-components';
const ProductList = ({ title, products }) => {
  return (
    <Section>
      <h2 className='title'>{title}</h2>
      {products.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </Section>
  );
};

export default ProductList;

const Section = styled.section`
  max-width: 140rem;
  margin: 0 auto;
  .title {
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
    margin: 2rem 0;
  }
`;
