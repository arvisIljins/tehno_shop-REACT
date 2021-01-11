import React, { useEffect } from 'react';
import axios from 'axios';
import url from '../utils/URL';

export const ProductContext = React.createContext();

//Featured products
const featuredProductsPicker = (date) => {
  return date.filter((item) => {
    return item.featured === true;
  });
};

// Paginated products
const paginate = (products) => {
  return products;
};

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  const [page, setPage] = React.useState([0]);
  const [filter, setFilter] = React.useState([]);
  const [sorted, setSorted] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      const featureProducts = featuredProductsPicker(response.data);
      setProducts(response.data);
      setSorted(paginate(response.data));
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
