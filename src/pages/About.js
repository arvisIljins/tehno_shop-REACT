import React from 'react';
import styled from 'styled-components';
import AboutImage from '../images/aboutimg.jpg';

const About = () => {
  return (
    <React.Fragment>
      <Heading className='about__heading'>
        About{' '}
        <span className='about__logo'>
          TechnoShops<span>.com</span>
        </span>
      </Heading>
      <Container>
        <div className='container__image'>
          <img src={AboutImage} alt='About' />
        </div>
        <div className='container__Text'>
          <p>
            Electronics, branch of physics and electrical engineering that deals
            with the emission, behaviour, and effects of electrons and with
            electronic devices. Electronics encompasses an exceptionally broad
            range of technology. The term originally was applied to the study of
            electron behaviour and movement, particularly as observed in the
            first electron tubes. It came to be used in its broader sense with
            advances in knowledge about the fundamental nature of electrons and
            about the way in which the motion of these particles could be
            utilized. Today many scientific and technical disciplines deal with
            different aspects of electronics. Research in these fields has led
            to the development of such key devices as transistors, integrated
            circuits, lasers, and optical fibres. These in turn have made it
            possible to manufacture a wide array of electronic consumer,
            industrial, and military products. Indeed, it can be said that the
            world is in the midst of an electronic revolution at least as
            significant as the industrial revolution of the 19th century.
          </p>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default About;

const Heading = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: var(--baseColor-Light);

  .about__logo {
    font-family: 'Nerko One', cursive;
    font-size: 4rem;
    color: var(--baseColor-Light-2);

    span {
      color: var(--baseColor-Light);
    }
  }
`;

const Container = styled.section`
  max-width: 140rem;
  background-color: var(--baseColor-Dark-2);
  padding: 2rem;
  margin: 3rem auto;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));

  .container__image {
    width: 100%;

    img {
      width: 100%;
    }
  }
  .container__Text {
    font-size: 1.5rem;
  }
`;
