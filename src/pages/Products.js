import React, { useContext } from 'react';
import { ProductContext } from '../context/products';

const Products = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div>
      <h1>{products[0].title}</h1>
    </div>
  );
};

export default Products;
