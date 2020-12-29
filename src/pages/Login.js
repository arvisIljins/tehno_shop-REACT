import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
const Login = () => {
  const history = useHistory();

  //States
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userName, setUserName] = React.useState('default');
  const [isMember, setIsMember] = React.useState(true);

  let isEmpty = false;

  return (
    <Section>
      <h2 className='section_title'>{isEmpty ? 'sign in' : 'register'}</h2>
    </Section>
  );
};

export default Login;

const Section = styled.section``;
