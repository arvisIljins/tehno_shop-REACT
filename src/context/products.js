import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import url from '../utils/URL';

export const ProductContext = createContext();

//Featured products
const featuredProductsPicker = (date) => {
  return date.filter((item) => {
    return item.featured === true;
  });
};

// Paginated products
const Paginate = (products) => {
  return products;
};

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [page, setPage] = useState([0]);
  const [filter, setFilter] = useState([]);
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      const featureProducts = featuredProductsPicker(response.data);
      setSorted(Paginate(products));
      setProducts(response.data);
      setFeatured(featureProducts);
      setLoading(false);
    });
    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, featured, sorted }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
