import styled from 'styled-components';


const Hero = styled.header`
width: 100vw;
height: 60vh;
background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(img) => img.img}) center/cover no-repeat;
display:flex;
align-items: center;

`;

export default Hero
