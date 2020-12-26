import styled from 'styled-components';

const Hero = styled.section`
  max-width: 155rem;
  height: 60vh;
  margin: 0 auto;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${(img) => img.img}) center/cover no-repeat;
  display: flex;
  align-items: center;

  :hover {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(img) => img.img}) center/cover no-repeat;
  }
`;

export default Hero;
