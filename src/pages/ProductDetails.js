import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../context/products';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import styled from 'styled-components';
import Button from '../components/Button';
const SingleProduct = () => {
  // Id for exact page
  //console.log(useParams());
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  //check if id mach
  const product = products.find((item) => item.id === parseInt(id));

  const specification = [
    'Intel Core i5-5257U CPU, Dual Core Low-power desktop platform processor, stable and reliable performance, less delay and lag.',
    'Intel HD Graphic6100 GPU Better and faster in playing games and watching videos than the previous generation. Meet your requirement for high resolution and give you an enjoyableentertainment experience.',
    '8GB DDR3 RAM for Advanced Multitasking Allow your PC to run at higher speed. It could deal with multiple task and windows easily at the same time.',
    '256GB SSD Storage Capacity Provides enough capacity to store pictures, videos, music and more.',
    'Good Heat Dissipation Performance Built-in excellent cooling fan ensures efficient and rapid heat dissipation. Energy saving, environmental protection, and low power consumption.',
    'Storage Capacity Expansion Support 128GB - 1TB M.2 SSD / 500GB - 2TB 2.5 inch HDD / 128GB TF card expansion',
  ];

  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image: { url },
      title,
      description,
      price,
      created_at,
    } = product;

    return (
      <Section>
        <div className='go_back_section'>
          <Link to='/products' className='button_back'>
            &#8678; Back to products
          </Link>
          <h3 className='date_text'>Posted: {created_at.slice(0, 10)}</h3>
        </div>
        <h1 className='title'>{title}</h1>
        <div className='image_row'>
          <img src={url} alt={title} className='product_image' />
          <div className='description_container'>
            <h2 className='product_price'>€ {price}</h2>
            <div className='description_container-text'>{description}</div>
            <h3 className='shipping_text'>Free shipping</h3>
            <Button>Add to cart</Button>
          </div>
        </div>
        <div className='featured_container'>
          <h3 className='feature_title'>Main Features：</h3>
          <div>
            {specification.map((item, index) => {
              return (
                <p className='feature_item' key={index}>
                  <span>&#10003;</span> {item}
                </p>
              );
            })}
          </div>
        </div>
      </Section>
    );
  }
};

export default SingleProduct;

const Section = styled.section`
  max-width: 110rem;
  margin: 3rem auto;
  padding: 2rem;
  background-color: var(--baseColor-Dark-2);

  .title {
    padding-top: 1rem;
    font-size: 4rem;
    text-align: center;
    color: var(--baseColor-Light);
  }
  .button_back {
    display: inline-block;
    background-color: transparent;
    outline: none;
    border: none;
    color: var(--baseColor-Light);
    border-bottom: solid 0.01rem var(--baseColor-Light);
    transition: all 0.3s;
    font-weight: 300;
    letter-spacing: 0.2rem;
    text-decoration: none;
    text-transform: uppercase;
    :hover {
      color: var(--baseColor-Light-2);
      border-bottom: solid 0.01rem var(--baseColor-Light-2);
      transform: scale(1.1) translateY(-0.3rem);
    }
    :active {
      color: var(--baseColor-Light);
      border-bottom: solid 0.01rem var(--baseColor-Light);
      transform: scale(1) translateY(0);
    }
  }
  .date_text {
    text-transform: uppercase;
    float: right;
    font-weight: 300;
    letter-spacing: 0.2rem;
    display: inline-block;
  }
  .image_row {
    padding: 3rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  }
  .product_image {
    width: 100%;
  }
  .description_container {
    padding: 2rem;
  }
  .description_container-text {
    font-size: 1.5rem;
  }
  .shipping_text {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.3rem;
    padding: 1rem 0;
    color: var(--baseColor-Light);
  }
  .product_price {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.3rem;
    padding: 1rem 0;
    color: var(--baseColor-Light);
  }
  .feature_title {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.3rem;
    padding: 1rem 0;
    color: var(--baseColor-Light);
  }
  .feature_item {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    padding: 0.8rem 0;
    color: var(--baseColor-Light);
  }
  .featured_container {
    padding: 1rem;
    background-color: rgba(5.1, 3.9, 4.7, 0.2);
  }

  @media screen and (max-width: 43.75em) {
    .image_row {
      display: block;
      padding: 1rem;
    }
    .description_container {
      padding: 0.5rem;
    }
    .title {
      font-size: 2.5rem;
    }
    .date_text {
      letter-spacing: 0.1rem;
    }
    .button_back {
      letter-spacing: 0.1rem;
    }
  }

  @media screen and (max-width: 43.75em) {
    .image_row {
      display: block;
      padding: 0.5rem;
    }
    .description_container {
      padding: 0;
    }
  }
`;
