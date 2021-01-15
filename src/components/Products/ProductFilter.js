import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../../context/products';
import { MdExpandMore } from 'react-icons/md';
const ProductFilter = () => {
  //get all unique values
  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };
  const {
    filter: { priceFilter },
    updateFilter,
    sorted,
    products,
  } = useContext(ProductContext);

  // get unique category
  let categorys = getUnique(products, 'category');
  // add all
  categorys = ['all', ...categorys];
  //map to jsx
  categorys = categorys.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  const [filterView, setFilterView] = React.useState(false);

  const OpenFilter = () => {
    setFilterView(!filterView);
  };
  return (
    <Section>
      <div className='open_button_row' onClick={OpenFilter}>
        <h4 className='filter_title'>Search:</h4>{' '}
        <MdExpandMore className='icon' onClick={OpenFilter} />
      </div>
      <div
        className={
          filterView ? 'filter_container' : 'filter_container filter_list-hide'
        }
      >
        <form className='search_form'>
          {/* Search */}
          <div className='slidecontainer'>
            <label htmlFor='search'> Search product:</label>
            <input
              type='text'
              className='slider'
              name='search'
              // value={search}
              onChange={updateFilter}
            />
          </div>
          {/* Category */}
          <div className='categoryContainer'>
            <label htmlFor='section'>Category:</label>
            <select
              name='section'
              className='slider'
              //  value={section}
              onChange={updateFilter}
            >
              {categorys}
            </select>
          </div>
          {/* Price from to */}
          <div className='slidecontainer'>
            <label>Price: 0 - {priceFilter}</label>
            <input
              type='range'
              min='1'
              max='5000'
              value={priceFilter}
              id='priceFilter'
              className='slider'
              name='priceFilter'
              onChange={updateFilter}
            />
          </div>
          {/* Shipping*/}
          <label className='container'>
            <h1 className='check_label'>Free shipping: </h1>
            <input
              type='checkbox'
              className='check'
              name='shipping'
              onChange={updateFilter}
            />
            <span className='checkmark'></span>
          </label>
          {/* Featured */}
          <label className='container'>
            <h1 className='check_label'>We suggest: </h1>
            <input
              type='checkbox'
              className='check'
              name='featuredFilter'
              id='featuredFilter'
              onChange={updateFilter}
            />
            <span className='checkmark'></span>
          </label>
          {/* Discounted */}
          <label className='container'>
            <h1 className='check_label'>Best prices: </h1>
            <input
              type='checkbox'
              className='check'
              name='discountedFilter'
              id='discountedFilter'
              onChange={updateFilter}
            />
            <span className='checkmark'></span>
          </label>
        </form>
        <h4 className='filter_title'>Products found: {sorted.flat().length}</h4>
      </div>
    </Section>
  );
};

export default ProductFilter;

const Section = styled.section`
  background-color: var(--baseColor-Dark);
  opacity: 0.7;
  width: 20%;

  margin: 4rem 0;
  margin-left: 2rem;
  padding: 1rem;
  max-height: 42rem;
  .filter_container {
    max-height: 42rem;
    overflow: hidden;
    animation-name: showFilter;
    animation-duration: 0.7s;
    animation-timing-function: ease-in-out;
  }

  @keyframes showFilter {
    0% {
      opacity: 0;
      height: 4rem;
    }
    100% {
      opacity: 1;
      height: 35rem;
    }
  }

  .open_button_row {
    display: flex;
    justify-content: space-between;
    cursor: context-menu;
  }
  .icon {
    font-size: 3rem;
    display: none;
    color: var(--baseColor-Light);
    transition: all 0.3s;
    :hover {
      color: var(--baseColor-Light-2);
      transform: scale(1.3);
    }
  }
  .filter_title {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.3rem;
    color: var(--baseColor-Light);
  }

  .categoryContainer {
    padding: 1rem;
    width: 100%;
    position: relative;
    label {
      font-size: 1.2rem;
    }
  }
  select {
    padding-left: 1rem;
  }

  .categoryContainer:after {
    content: '<>';
    font: 1.7rem 'Consolas', monospace;
    color: var(--baseColor-Light-2);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 11px;

    top: 2.8rem;
    padding: 0 0 0.2rem;
    border-bottom: 0.1rem solid #999;

    position: absolute;
    pointer-events: none;
  }

  // Slider
  .slidecontainer {
    padding: 1rem;
    width: 100%;
    label {
      font-size: 1.2rem;
    }
  }

  .slider {
    color: var(--baseColor-Light-2);
    -webkit-appearance: none;
    border: none;
    appearance: none;
    width: 100%;
    height: 2.5rem;
    background: var(--baseColor-Light);
    background-color: var(--baseColor-Light);
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  /* Mouse-over effects */
  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2.5rem;
    height: 2.5rem;
    background: var(--baseColor-Light-2);
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 2.5rem;
    height: 2.5rem;
    background: var(--baseColor-Light-2);
    cursor: pointer;
  }

  // Check mark
  .container {
    padding: 1rem;
    display: flex;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    margin-left: 1rem;
    align-self: flex-end;
    height: 2.5rem;
    width: 2.5rem;
    background-color: var(--baseColor-Light);
  }
  .container:hover input ~ .checkmark {
    background-color: var(--baseColor-Light-2);
  }

  .container input:checked ~ .checkmark {
    background-color: var(--baseColor-Light-2);
  }
  .checkmark:after {
    content: 'x';
    color: var(--baseColor-Light);
    font-size: 3rem;
    display: none;
    text-align: center;
    margin-top: -1.4rem;
  }
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  .check_label {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media screen and (max-width: 68.75em) {
    width: 80%;
    margin: 1rem auto;

    .icon {
      display: block;
    }

    .filter_list-hide {
      display: none;
    }
  }
`;
