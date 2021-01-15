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
  const itemsPerPage = 8;
  const numberOfPages = Math.ceil(products.length / itemsPerPage);
  const newProduct = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  });
  return newProduct;
};

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  const [page, setPage] = React.useState([0]);

  const [sorted, setSorted] = React.useState([]);
  const [popup, setPopup] = React.useState({ show: false, image: [] });
  //Filter
  const [filter, setFilter] = React.useState({
    search: '',
    section: 'all',
    shipping: false,
    priceFilter: 5000,
    discountedFilter: false,
    featuredFilter: false,
  });

  //Open image popup
  const OpenPopup = (index) => {
    setPopup({ show: true, image: index });
  };
  const ClosePopup = () => {
    setPopup({ show: false, image: [] });
  };

  //Update filters
  const updateFilter = (e) => {
    const type = e.target.type;
    const filters = e.target.name;
    const value = e.target.value;
    let filterValue;

    if (type === 'checkbox') {
      filterValue = e.target.checked;
    } else {
      filterValue = value;
    }
    setFilter({ ...filter, [filters]: filterValue });
    //console.log(filterValue);
  };

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

  React.useLayoutEffect(() => {
    let newProducts = [...products].sort((a, b) => a.price - b.price);
    // Filter logic
    const {
      search,
      section,
      shipping,
      priceFilter,
      discountedFilter,
      featuredFilter,
    } = filter;

    if (section !== 'all') {
      newProducts = newProducts.filter((item) => item.category === section);
    }
    if (search !== '') {
      newProducts = newProducts.filter((item) => {
        let title = item.title.toLowerCase().trim();
        return title.startsWith(search) ? item : null;
      });
    }

    if (featuredFilter !== false) {
      newProducts = newProducts.filter(
        (item) => item.featured === featuredFilter
      );
    }
    if (shipping !== false) {
      newProducts = newProducts.filter((item) => item.Shipping === null);
    }

    if (discountedFilter !== false) {
      newProducts = newProducts.filter((item) => item.discountPrice != null);
    }

    if (priceFilter !== 5000) {
      newProducts = newProducts.filter((item) => item.price < priceFilter);
    }
    setPage(0);
    setSorted(paginate(newProducts));
  }, [filter, products]);

  //Change page
  const changePage = (index) => {
    setPage(index);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        featured,
        sorted,
        page,
        changePage,
        popup,
        OpenPopup,
        ClosePopup,
        filter,
        updateFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
