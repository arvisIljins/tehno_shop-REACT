import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../../context/products';

const CartItem = ({ image, title, price }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <h3>€ {price}</h3>
    </div>
  );
};

export default CartItem;
