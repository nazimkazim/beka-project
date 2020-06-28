import React from 'react';
import styled from 'styled-components'

const Section = styled.section`
  background-image:${props => `url(${props.background})`};
  background-size: cover;
`
const Title = styled.h1`
  background-color:#dcd056;
  font-family:Roboto;
  padding:10px;
  display:inline;
  color:#121212;
  line-height:70px;
  -moz-box-decoration-break:clone;
  -webkit-box-decoration-break:clone;
  box-decoration-break:clone;
`


function HeroComp({background, title}) {
  return (
    <Section className="hero is-medium is-bold" background={background}>
      <div className="hero-body">
        <div className="container">
          <Title className="title">
            {title}
          </Title>
        </div>
      </div>
    </Section>
  );
}

export default HeroComp;
