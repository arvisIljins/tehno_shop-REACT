import styled from 'styled-components';

const PageTransition = styled.div`
  animation-name: moveFromTop;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;

  @keyframes moveFromTop {
    0% {
      opacity: 0;
      transform: translateY(-30rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default PageTransition;
