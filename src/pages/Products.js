import React, { useContext } from 'react';
import Loading from '../components/Loading';
import ProductList from '../components/ProductList';
import { ProductContext } from '../context/products';

const Products = () => {
  const { loading, products } = useContext(ProductContext);
  console.log(products);

  return loading ? (
    <Loading />
  ) : (
    <ProductList title='our products' products={products} />
  );
};

export default Products;
