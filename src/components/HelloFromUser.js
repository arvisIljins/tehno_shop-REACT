import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HelloFromUser = () => {
  const { user, userLogOut } = useContext(UserContext);
  return (
    <Section>
      <div className='container'>
        {user.username === null ? (
          <h3 className='user_greeting'>
            Hey! come here to{' '}
            <span className='login_button'>
              <Link to='login'>login</Link>
            </span>
          </h3>
        ) : (
          <h3 className='user_greeting'>
            Nice to see you here <span>{user.username} </span>
            <span onClick={() => userLogOut()} className='login_button'>
              Logout
            </span>
          </h3>
        )}
      </div>
    </Section>
  );
};

export default HelloFromUser;

const Section = styled.section`
  position: relative;
  z-index: 9999;
  background-color: var(--baseColor-Dark-3);

  .container {
    max-width: 155rem;
    margin: 0 auto;
  }

  .user_greeting {
    text-align: right;
    padding: 0.3rem 1rem;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.2rem;
    span {
      font-weight: 500;
    }
  }
  .login_button {
    font-weight: 500;
    cursor: pointer;
    color: var(--baseColor-Light);
    border-bottom: solid 0.1rem var(--baseColor-Light);
    :hover {
      color: var(--baseColor-Light-2);
    }
    a {
      text-decoration: none;
      color: var(--baseColor-Light);
      :hover {
        color: var(--baseColor-Light-2);
      }
    }
  }

  @media screen and (max-width: 25em) {
    .user_greeting {
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;
