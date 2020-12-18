import React, { useContext } from 'react';
import { ProductContext } from '../context/products';

const Products = () => {
  const { products } = useContext(ProductContext);
  return <div>{products}</div>;
};

export default Products;
