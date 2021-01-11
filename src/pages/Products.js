import React, { useContext } from 'react';
import Loading from '../components/Loading';
import ProductList from '../components/Products/ProductList';
import { ProductContext } from '../context/products';

const Products = () => {
  const { loading, sorted } = useContext(ProductContext);

  return loading ? (
    <Loading />
  ) : (
    <ProductList title='Product list' products={sorted} />
  );
};

export default Products;
