import styled from 'styled-components';


const Hero = styled.section`
width: 100vw;
height: 60vh;
background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${(img) => img.img}) center/cover no-repeat;
display:flex;
align-items: center;




:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(img) => img.img}) center/cover no-repeat;
}

`;

export default Hero
