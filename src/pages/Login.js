import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const history = useHistory();

  //States
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [isMember, setIsMember] = React.useState(false);

  let isEmpty = true;

  return (
    <Section>
      <h2 className='section_title'>{isEmpty ? 'sign in' : 'register'}</h2>

      <form className='login_form'>
        {/* Email */}
        <div className='form_group'>
          <input
            className='form_input'
            placeholder='Email address'
            type='email'
            required
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='form_label' htmlFor='email'>
            Email
          </label>
        </div>
        {/* Password*/}
        <div className='form_group'>
          <input
            className='form_input'
            placeholder='Password'
            required
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className='form_label' htmlFor='password'>
            Password
          </label>
        </div>
        {/* User */}
        {isMember && (
          <div className='form_group'>
            <input
              className='form_input'
              placeholder='Your username'
              required
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className='form_label' htmlFor='username'>
              Username
            </label>
          </div>
        )}
        {/* Description text */}
        {isEmpty && (
          <p className='form_description'>
            Please enter your username and password to login or{' '}
            <span className='register_button'>go to register!</span>
          </p>
        )}
        {/* Submit button */}
        <div className='button_container'>
          {!isEmpty && (
            <Button type='submit' onChange={console.log('click')}>
              Login
            </Button>
          )}
        </div>
      </form>
    </Section>
  );
};

export default Login;

const Section = styled.section`
  max-width: 110rem;
  margin: 3rem auto;
  padding: 2rem;
  background-color: var(--baseColor-Dark-2);

  .section_title {
    text-transform: uppercase;
    padding: 1rem 0;
    font-size: 3rem;
    text-align: center;
    color: var(--baseColor-Light);
  }

  .login_form {
    max-width: 50rem;
    margin: 0 auto;
  }

  .form_label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
  }
  input {
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
  .form_description {
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.2rem;
    padding: 2rem 2rem;
    font-size: 1rem;
  }
  .register_button {
    font-weight: 500;
    cursor: pointer;
    border-bottom: solid 0.1rem var(--baseColor-Light);
    :hover {
      color: var(--baseColor-Light);
    }
  }
  .button_container {
    overflow: hidden;
  }
`;
const Button = styled.button`
  margin-top: 1rem;
  display: inline-block;
  float: right;
  padding: 1rem 2rem;
  font-size: 3rem;
  border: solid 0.1rem var(--baseColor-Light-2);
  background-color: transparent;
  transition: all 0.3s;
  color: var(--baseColor-Light-2);
  cursor: pointer;
  :hover {
    background-color: var(--baseColor-Light);
    transform: translateY(-0.3rem);
  }
  a {
    text-decoration: none;
    color: var(--baseColor-Light-2);
  }

  @media screen and (max-width: 43.75em) {
    padding: 1rem 1.5rem;
    font-size: 2rem;
  }
`;
