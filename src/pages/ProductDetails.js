import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/products';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
const SingleProduct = () => {
  // Id for exact page
  //console.log(useParams());
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  //check if id mach
  const product = products.find((item) => item.id === parseInt(id));
  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image: { url },
      title,
      description,
      price,
    } = product;
    return (
      <React.Fragment>
        <h1>{title}</h1>
      </React.Fragment>
    );
  }
};

export default SingleProduct;
