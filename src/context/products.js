import React, { useEffect } from 'react';
import axios from 'axios';
import url from '../utils/URL';
export const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  useEffect(() => {
    axios.get(`${url}/products`).then((items) => console.log(items));
    return () => {};
  });

  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
