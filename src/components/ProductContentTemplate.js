import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font-family:Roboto;
  font-size:30px;
  font-weight:bold;
`;

const Subheader = styled.h2`
  font-family:Roboto;
  font-size:20px;
  font-weight:700;
  margin-top:80px;
`;

const DescriptionContainer = styled.div`
  min-height:200px;
  padding:20px;
`;

const DescriptionIcon = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const DescriptionContent = styled.div`
  height:100%;
  padding:10px;
  font-size:18px;
  font-family:Roboto;
`;

const DescriptionImageContainer = styled.div`
  width:80px;
  height:80px;

  & > img {
    height:100%;
  }
`;

function ProductContentTemplate({ header, subheader, descriptionContent, iconHpposition, features }) {

  return (
    <section class="section">
      <div class="container">
        <Header class="title">{ header }</Header>
        <Subheader class="subtitle">
          { subheader }
        </Subheader>
        <DescriptionContainer className="columns">
          <DescriptionIcon className="column is-one-fifth">
            <DescriptionImageContainer>
              <img src={ iconHpposition } alt="" />
            </DescriptionImageContainer>
          </DescriptionIcon>
          <DescriptionContent className="column">
            { descriptionContent }
          </DescriptionContent>
        </DescriptionContainer>

        { features.map((item) => (
          <DescriptionContainer className="columns">
            <DescriptionIcon className="column is-one-fifth">
              <DescriptionImageContainer>
                <img src={ item.icon } alt="" />
              </DescriptionImageContainer>
            </DescriptionIcon>
            <DescriptionContent className="column">
              <Header class="title">{ item.header }</Header>
              { item.description }
            </DescriptionContent>
          </DescriptionContainer>
        )) }


      </div>
    </section>
  );
}

export default ProductContentTemplate;
