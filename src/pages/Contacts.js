import React, { Component } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { TiArrowBackOutline } from 'react-icons/ti';
import PageTransition from '../components/PageTransition';
export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      primary: true,
      email: '',
    };
  }

  changeColor() {
    this.setState({ primary: !this.state.primary });
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    let btn_class = this.state.primary ? 'btn-primary' : 'btn-done';
    let btn_text = this.state.primary ? 'Send' : 'Thanks! Message sent..';

    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm(
          'service_t56qaxo',
          'template_hiekcmr',
          e.target,
          'user_csSnq7aeEIAr0vHmDGd4k'
        )
        .then(
          (result) => {},
          (error) => {}
        );
      e.target.reset();
    }

    return (
      <PageTransition>
        <SectionTile>Contact us</SectionTile>
        <Form className='contact-form' onSubmit={sendEmail}>
          <div className='form__group'>
            <input
              type='text'
              className='form__input'
              placeholder='Full Name'
              id='name'
              name='name'
              required
            />
            <label htmlFor='name' className='form__label'>
              Your name
            </label>
          </div>

          <div className='form__group'>
            <input
              type='email'
              className='form__input'
              placeholder='Email address'
              id='email'
              name='email'
              required
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label htmlFor='email' className='form__label'>
              Your email address
            </label>
          </div>

          <div className='form__group'>
            <input
              type='Message'
              className='form__input'
              placeholder='Your message..'
              id='message'
              name='message'
              required
            />
            <label htmlFor='email' className='form__label'>
              Your message
            </label>
          </div>

          <button
            disabled={!this.state.email}
            type='submit'
            value='Send'
            className={btn_class}
            onClick={this.changeColor.bind(this)}
            style={{ marginTop: '2rem' }}
          >
            <TiArrowBackOutline /> {btn_text}
          </button>
        </Form>
      </PageTransition>
    );
  }
}

const Form = styled.form`
  max-width: 90rem;
  margin: 3rem auto;
  padding: 2rem;
  background-color: var(--baseColor-Dark-2);

  input {
    margin-left: 5%;
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
      box-shadow: 0 0.3rem 4rem 0 var(--baseColor-Light-2);
      border-bottom: 0.3rem solid var(--success);
    }
    :focus:invalid {
      border-bottom: 0.3rem solid red;
    }
    ::-webkit-input-placeholder {
      color: var(--baseColor-Light);
    }
  }
  .form__label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 5rem;
    margin-top: 0.7rem;
    padding-bottom: 1rem;
    display: block;
    transition: all 0.3s;
  }
  .form__input:placeholder-shown + .form__label {
    opacity: 0;
    visibility: hidden;
    transform: translate(-4rem);
  }

  .btn-primary {
    text-decoration: none;
    color: var(--baseColor-Light-2);
    background: transparent;
    padding: 1.1rem 1.6rem;
    border: 0.1rem solid var(--baseColor-Light-2);
    transition: 0.2s;
    text-transform: uppercase;
    cursor: pointer;
    touch-action: manipulation;
    outline: none;
    font-size: 2rem;
    font-weight: 400;
  }
  .btn-primary:hover {
    transform: translateY(-0.3rem);
    background: var(--baseColor-Light-2);
    color: var(--baseColor-Light);
    border-color: var(--baseColor-Light);
  }
  .btn-primary:active {
    transform: translateY(-0.1rem);
  }
  .btn-done {
    text-decoration: none;
    color: var(--success);
    background: transparent;
    padding: 1.1rem 1.6rem;
    border: none;
    outline: none;
    font-size: 2rem;
    font-weight: 400;
    pointer-events: none; /* Disable button click*/
  }
  @media screen and (max-width: 300px) {
    .bottomContainer {
      width: 20rem;
    }
  }
`;
const SectionTile = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  margin-top: 2rem;
`;
