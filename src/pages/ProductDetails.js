import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  // Id for exact page
  //console.log(useParams());
  const { id } = useParams();
  return <div>Single Product {id}</div>;
};

export default SingleProduct;
