import React, { useContext } from 'react';
import styled from 'styled-components';
import PageTransition from '../components/PageTransition';
import loginUser from '../components/strapi/loginUser';
import userRegister from '../components/strapi/userRegister';
import { UserContext } from '../context/user';
import { CSSTransitionGroup } from 'react-transition-group';

const Login = () => {
  const { userLogin, showAlert } = useContext(UserContext);

  //States
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [isMember, setIsMember] = React.useState(false);

  let isEmpty = !email && !password;

  // Toggle Member
  const toggleMember = () => {
    setIsMember(!isMember);
  };

  const handleSubmit = async (e) => {
    //alert
    showAlert({
      message: `Accessing user data please wait`,
      type: 'alert',
    });
    e.preventDefault();
    let response;
    isMember
      ? (response = await loginUser({ email, password }))
      : (response = await userRegister({ email, password, username }));

    if (response) {
      const {
        jwt: token,
        user: { username },
      } = response.data;
      const newUser = { token, username };
      userLogin(newUser);

      showAlert({
        message: `Hey ${username}! You are successfully logged in, enjoy shopping with us!`,
        type: 'logIn',
      });
    } else {
      showAlert({
        message: `Hey! There was a problem with your data, please check your username or password and try again!`,
        type: 'alert',
      });
    }
  };

  return (
    <PageTransition>
      <Section>
        <h2 className='section_title'>{isMember ? 'sign in' : 'register'}</h2>

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
          {!isMember && (
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
              {isMember
                ? 'Please enter your username and password to login or '
                : 'Please enter your email, password and username to register or '}

              <span className='register_button' onClick={() => toggleMember()}>
                {isMember ? 'go to register!' : 'go to login'}
              </span>
            </p>
          )}
          {/* Submit button */}
          {!isEmpty && (
            <div className='button_container'>
              <p className='form_description'>
                {isMember ? 'If you want a login ' : 'If you want a register '}

                <span
                  className='register_button'
                  onClick={() => toggleMember()}
                >
                  {isMember ? 'go to register!' : 'go to login!'}
                </span>
              </p>
              <Button type='submit' onClick={handleSubmit}>
                {isMember ? 'Login' : 'Register'}
              </Button>
            </div>
          )}
        </form>
      </Section>
    </PageTransition>
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
    padding: 0 2rem;
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
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;
const Button = styled.button`
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
