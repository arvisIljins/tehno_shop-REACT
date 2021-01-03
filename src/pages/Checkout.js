import React, { useContext } from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import { useHistory } from 'react-router-dom';
import EmptyCart from '../components/cart/EmptyCart';
import styled from 'styled-components';
import CheckOutItem from '../components/cart/CheckOutItem';
import Button from '../components/Button';

const Checkout = () => {
  const { cart, total, taxis, clearCart } = useContext(CartContext);
  const { user, hideAlert, showAlert, alert } = useContext(UserContext);
  const history = useHistory();
  //States
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [postcode, setPostcode] = React.useState('');
  const [info, setInfo] = React.useState('');
  const [cartName, setCartName] = React.useState('');
  const [error, setError] = React.useState('');
  const isEmpty =
    !name ||
    !phone ||
    !country ||
    !city ||
    !address ||
    !postcode ||
    !cartName ||
    alert.show;

  async function handleSubmit(e) {
    e.preventDefault();
  }
  return cart.length < 1 ? (
    <EmptyCart />
  ) : (
    <Section>
      <h1 className='title'>Checkout</h1>
      <h2 className='cart_total'>Order Total: € {total}</h2>
      <h2 className='cart_total cart_total-small'>
        21% tax included: € {taxis}
      </h2>
      <div className='line' />
      {/* Inputs*/}

      <div className='grid_container'>
        <form className='form'>
          <h4 className='sub-title'>Shipping Details:</h4>
          {/* Name */}
          <div className='form_group'>
            <input
              className='form_input'
              placeholder='Full Name'
              required
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className='form_label' htmlFor='name'>
              Full Name
            </label>
          </div>

          {/* Phone */}
          <div className='form_group'>
            <input
              className='form_input'
              placeholder='Phone number'
              required
              type='text'
              id='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label className='form_label' htmlFor='phone'>
              Phone number
            </label>
          </div>

          {/* Country */}
          <div className='form_group'>
            <input
              className='form_input'
              placeholder='Country'
              required
              type='text'
              id='country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <label className='form_label' htmlFor='country'>
              Country
            </label>
          </div>

          {/* City */}
          <div className='form_group'>
            <input
              className='form_input'
              placeholder='City'
              required
              type='text'
              id='city'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label className='form_label' htmlFor='city'>
              City
            </label>
          </div>

          {/* Address */}
          <div className='form_group'>
            <input
              className='form_input'
              placeholder='Address'
              required
              type='text'
              id='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label className='form_label' htmlFor='address'>
              Address
            </label>
          </div>

          {/* Postcode */}
          <div className='form_group'>
            <input
              className='form_input'
              placeholder='Postcode'
              required
              type='text'
              id='postcode'
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
            <label className='form_label' htmlFor='postcode'>
              Postcode
            </label>
          </div>

          {/* Postcode */}
          <div className='form_group'>
            <textarea
              className='form_input'
              placeholder='Extra information about the order'
              required
              type='text'
              id='info'
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
            <label className='form_label' htmlFor='info'>
              Extra information about the order
            </label>
          </div>
        </form>
        <div>
          <div className='credit-cart_input'>
            <h4 className='sub-title'>Products:</h4>
            {cart.map((item) => {
              return <CheckOutItem key={item.id} {...item} />;
            })}
          </div>
          <div className='credit-cart_input'>
            <h4 className='sub-title'>Payment Details:</h4>
            {/* Stripe Elements */}
            {/* Card holder name */}
            <div className='form_group'>
              <input
                className='form_input'
                placeholder='Card holder full name'
                required
                type='text'
                id='cartName'
                value={cartName}
                onChange={(e) => setCartName(e.target.value)}
              />
              <label className='form_label' htmlFor='cartName'>
                Card holder full name
              </label>
            </div>
            {/* Strip Error */}
            {error && <p className='error'>{error}</p>}

            {/* Submit */}
            {isEmpty ? (
              <p className='error_description'>
                Please fill out Shipping information section and card holed
                name..
              </p>
            ) : (
              <div className='pay_now_btn_container'>
                <Button>Pay now</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Checkout;

const Section = styled.section`
  max-width: 110rem;
  margin: 3rem auto;
  padding: 2rem;
  background-color: var(--baseColor-Dark-2);

  .grid_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .title {
    padding: 1rem 0;
    font-size: 4rem;
    text-align: center;
    color: var(--baseColor-Light);
  }

  .cart_total {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.2rem;
    padding: 0 2rem;
    text-align: center;
  }
  .cart_total-small {
    font-size: 1.2rem;
  }
  .line {
    height: 0.1rem;
    max-width: 60rem;
    margin: 1rem auto;
    background-color: var(--baseColor-Light);
  }

  //Form

  .form {
    padding-top: 1rem;
    max-width: 50rem;
    margin: 2rem;
    padding-bottom: 2rem;
    background-color: var(--overlay-color);
  }

  .sub-title {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
    padding-left: 1rem;
    text-align: left;
  }

  .form_label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
  }
  input,
  textarea {
    margin-left: 3%;
    margin-top: 3%;
    font-size: 1.5rem;
    color: inherit;
    font-family: inherit;
    padding: 1.5rem 2rem;
    border-radius: 0.2rem;
    background-color: transparent;
    border: none;
    border-bottom: 0.3rem solid var(--baseColor-Light);
    width: 90%;
    display: block;
    transition: all 0.3s;

    :focus {
      outline: none;
      box-shadow: 0 0.3rem 4rem 0 var(--baseColor-Light);
      border-bottom: 0.3rem solid var(--success);
    }
    :focus:invalid {
      border-bottom: 0.3rem solid var(--alert);
    }
    ::-webkit-input-placeholder {
      color: var(--mainText);
    }
  }
  .form_input:placeholder-shown + .form_label {
    opacity: 0;
    visibility: hidden;
    transform: translate(-4rem);
  }

  //Payment Section
  .credit-cart_input {
    padding-top: 1rem;
    max-width: 50rem;
    margin: 2rem;
    padding-bottom: 2rem;
    background-color: var(--overlay-color);
  }

  .error_description {
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.2rem;
    padding: 2rem 2rem;
    font-size: 1rem;
  }

  .pay_now_btn_container {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 56.25em) {
    padding: 0.5rem;
    .form,
    .credit-cart_input {
      margin: 2rem 0.5rem;
    }
  }

  @media screen and (max-width: 43.75em) {
    padding: 0.5rem;
    .grid_container {
      display: block;
    }

    .form,
    .credit-cart_input {
      margin: 2rem auto;
    }
  }
  @media screen and (max-width: 29em) {
    padding: 0.5rem;
  }
`;
