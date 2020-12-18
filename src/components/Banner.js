import React from 'react'
import styled from 'styled-components';

const Banner = ({header, secondary, children}) => {
    return (
        <Section>
            <h1 className="header">{header}</h1>
            <h3 className="header_secondary">{secondary}</h3>
            {children}
        </Section>
    )
}

export default Banner;

const Section = styled.section`
width: 65%;
margin: 0 auto;

.header{
font-size: 5rem;
text-align: left;
text-transform: uppercase;
}
.header_secondary{
font-size: 2rem;
text-align: left;
text-transform: uppercase;
padding: 1rem 0;
}

@media screen and (max-width: 43.75em) {
    .header{
font-size: 3rem;

}
.header_secondary{
font-size: 1rem;
}
  }

`;


