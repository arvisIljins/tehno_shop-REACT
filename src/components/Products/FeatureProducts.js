import React, { useContext } from 'react';
import { ProductContext } from '../../context/products';
import Loading from '../Loading';
import ProductList from './ProductList';

const FeatureProducts = () => {
  const { loading, featured } = useContext(ProductContext);
  return loading ? (
    <Loading />
  ) : (
    <ProductList title='Top products' products={featured} />
  );
};

export default FeatureProducts;
