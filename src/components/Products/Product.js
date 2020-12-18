import React from 'react';

const Product = ({ id, title, image, price }) => {
  return (
    <section>
      <img src={image.url} alt={title} />
      <h4>{price}</h4>
    </section>
  );
};

export default Product;
