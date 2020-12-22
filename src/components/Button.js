import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 1.5rem 2rem;
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

export default Button;
