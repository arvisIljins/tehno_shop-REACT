import React, { useContext } from 'react';
import { ProductContext } from '../context/products';
import styled from 'styled-components';
const ImagePopUp = () => {
  const { popup, ClosePopup } = useContext(ProductContext);
  if (popup.show) {
    return (
      <Popup onClick={ClosePopup}>
        <Section>
          <button className='close_button' onClick={ClosePopup}>
            &#10005;
          </button>
          <img src={popup.image} alt='gallery' className='gallery_image' />
        </Section>
      </Popup>
    );
  } else {
    return <p />;
  }
};

export default ImagePopUp;
const Popup = styled.div`
  z-index: 99999;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  backdrop-filter: blur(6px);
  animation-name: growIn;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;

  //animation
  @keyframes growIn {
    0% {
      opacity: 0;
      transform: scale(0) translateY(15rem);
    }

    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;
const Section = styled.section`
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: calc(50vh - 30rem) auto;
  max-width: 50%;
  background-color: transparent;
  transition: all 0.3s;
  .close_button,
  .close_button:active {
    outline: none;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    font-size: 3rem;
    border: none;
    background-color: transparent;
    transition: all 0.3s;
    color: var(--baseColor-Light-2);
    cursor: pointer;
    :hover {
      color: var(--baseColor-Light);
      transform: translateY(-0.3rem);
    }
  }
  .gallery_image {
    width: 100%;
    max-height: 90vh;
    object-fit: scale-down;
    cursor: zoom-out;
  }

  @media screen and (max-width: 43.75em) {
    max-width: 100%;
    padding: 1rem;
  }
`;
