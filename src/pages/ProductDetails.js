import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../context/products';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import styled from 'styled-components';
import Button from '../components/Button';
import { CartContext } from '../context/cart';
import NoImage from '../images/NoImageAvailable.png';
import PageTransition from '../components/PageTransition';
const SingleProduct = () => {
  const history = useHistory();
  const { addToCart } = useContext(CartContext);
  // Id for exact page
  // console.log(useParams());
  const { id } = useParams();
  const { products, OpenPopup } = useContext(ProductContext);
  //console.log(products);
  //check if id mach
  const product = products.find((item) => item.id === parseInt(id));

  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image,
      title,
      description,
      price,
      created_at,
      specification,
      Shipping,
      galery,
      discountPrice,
    } = product;
    const url = image === null ? NoImage : image.url;

    return (
      <PageTransition>
        <Section>
          <div className='go_back_section'>
            <Link to='/products' className='button_back'>
              &#8678; Back to products
            </Link>
            <h3 className='date_text'>Posted: {created_at.slice(0, 10)}</h3>
          </div>
          <h1 className='title'>{title}</h1>
          <div className='image_row'>
            <img
              src={url}
              alt={title}
              className='product_image'
              onClick={() => {
                OpenPopup(url);
              }}
            />
            <div className='description_container'>
              <div className='price_container'>
                <h4
                  className={`price_price ${
                    discountPrice && `price_if_discount`
                  }`}
                >
                  €{price}
                </h4>
                {discountPrice && (
                  <h4 className='discount_price'>€{discountPrice}</h4>
                )}
              </div>
              <div className='description_container-text'>{description}</div>

              <h3 className='shipping_text'>
                {Shipping === null
                  ? 'Free shipping'
                  : `Shipping coust is € ${Shipping}`}
              </h3>
              <Button
                onClick={() => {
                  addToCart(product);
                  history.push('/cart');
                }}
              >
                Add to cart
              </Button>
            </div>
          </div>
          <div className='gallery_container'>
            {galery &&
              galery.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.url}
                    alt={`gallery ${index}`}
                    className='gallery_image'
                    onClick={() => {
                      OpenPopup(item.url);
                    }}
                  ></img>
                );
              })}
          </div>
          <div className='featured_container'>
            <h3 className='feature_title'>Main Features：</h3>
            <div>
              {specification === null ? (
                <p className='feature_item'>No specification</p>
              ) : (
                specification.map((item, index) => {
                  return (
                    <p className='feature_item' key={index}>
                      <span>&#10003;</span> {item}
                    </p>
                  );
                })
              )}
            </div>
          </div>
        </Section>
      </PageTransition>
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
    margin: 0 auto;
    width: 100%;
    max-height: 35rem;
    object-fit: scale-down;
    cursor: zoom-in;
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

  .price_container {
    display: flex;
    justify-content: start;
    align-items: flex-end;
  }
  .product_price {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.3rem;
    padding: 1rem 0;
    color: var(--baseColor-Light);
  }
  .discount_price {
    padding-left: 1rem;
    font-size: 2rem;
    overflow: hidden;
    outline: hidden;
  }
  .price_if_discount {
    text-decoration: line-through;
    font-size: 1.7rem;
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
    background-color: var(--gallery-color);
  }
  .gallery_container {
    background-color: var(--gallery-color);
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    justify-items: center;
  }
  .gallery_image {
    padding: 1rem;
    width: 20rem;
    height: 15rem;
    object-fit: scale-down;

    cursor: zoom-in;
    :hover {
      background-color: var(--baseColor-Light);
    }
  }
  @media screen and (max-width: 56.25em) {
    .price_container {
      justify-content: center;
    }
  }

  @media screen and (max-width: 43.75em) {
    .image_row {
      display: block;
      padding: 0.5rem;
      text-align: center;
    }
    .description_container {
      padding: 0;
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
`;
