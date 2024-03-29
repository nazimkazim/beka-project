import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";


const Header = styled.h1`
  font-family:Roboto;
  font-size:20px;
  font-weight:bold;
  margin-top:${props => props.marginTop && props.marginTop};
  margin-bottom:${props => props.marginBottom && props.marginBottom};
`;

const Subheader = styled.h2`
  font-family:Roboto;
  font-size:20px;
  font-weight:500;
  margin-top:${props => props.marginTop && props.marginTop};
  margin-bottom:${props => props.marginBottom && props.marginBottom};
  text-align:${props => props.centered && props.centered};
`;

const DescriptionContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:80px;
  padding:20px;
`;

const DescriptionIcon = styled.div`
  display:flex;
  justify-content:center;
  align-items:start;
`;

const DescriptionContent = styled.div`
  height:100%;
  padding:5px;
  font-size:18px;
  font-family:Roboto;
`;

const DescriptionImageContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:${props => props.iconWidth || '75px'};
  height:${props => props.iconHeight || '60px'};

  & > img {
    height:100%;
  }
`;

const SupportDescription = styled.p`
  font-family:Roboto;
  font-size:18px;
  font-weight:400;
  margin-top:${props => props.marginTop && props.marginTop};
`;

const ProcessingContainer = styled.div`
  min-width:300px;
  min-height:80px;
  /* background-color:yellow; */
  grid-template-columns: 50% 50%;
  display: grid;
  align-items:center;
  text-align:center;
  padding:10px;
  @media (max-width: 414px) {
    grid-template-columns: 100%;
  }
`;
const ProcessingContainerHalf = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  font-size:18px;
  justify-content:center;
  flex-direction:column;
  /* background-color:blue; */
`;
const ProcessingImageContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  min-width:100%;
  min-height:80px;
  /* background-color:yellow; */
`;

const HR = styled.hr`
  border-top: 2px solid black;
`;

const CascadianCaseStudiesHeader = styled.span`
  margin:0 auto;
  font-weight:bold;
  font-size:30px;
`;

function ProductContentTemplate({
  url,
  header,
  subheader,
  descriptionContent,
  iconHpposition,
  features,
  solution,
  support,
  precision,
  marginTop,
  iconIsLarger,
  processing,
  smartrViewPic,
  cascadianCaseStudiesHeader,
  shouldBeDescription
}) {

  return (
    <section class="section">
      <Helmet>
        <meta charSet="utf-8" name="description" content={ descriptionContent } />
        <title>{ header }</title>
        <link rel="canonical" href={ `http://www.uvision.kz/${url}` } />
      </Helmet>
      <div class="container">
        <Header class="title">{ header }</Header>
        <Subheader class="subtitle" marginTop="80px">
          { subheader }
        </Subheader>
        { shouldBeDescription && (
          <DescriptionContainer className="columns">
            <DescriptionIcon className={ `${iconIsLarger ? 'column is-6' : 'column is-1'}` }>
              { iconIsLarger ? <DescriptionImageContainer iconWidth="100%" iconHeight="100%">
                <img src={ iconHpposition } alt="" />
              </DescriptionImageContainer> : <DescriptionImageContainer>
                <img src={ iconHpposition } alt="" />
              </DescriptionImageContainer> }
            </DescriptionIcon>
            <DescriptionContent className="column">
              { smartrViewPic && <img src={ smartrViewPic } alt="" /> }
              { descriptionContent }
            </DescriptionContent>
          </DescriptionContainer>
        ) }
        { cascadianCaseStudiesHeader && <CascadianCaseStudiesHeader>{ cascadianCaseStudiesHeader }</CascadianCaseStudiesHeader> }
        { features.map((item) => (
          <DescriptionContainer className="columns product-description-column">

            <DescriptionIcon className="column is-1">
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
        { solution && solution.map((item) => (
          <>
            <HR />
            <Header class="title">{ item.header }</Header>
            <Subheader class="subtitle" marginBottom="50px">
              { item.subheader }
            </Subheader>
            <DescriptionContainer className="columns">
              <DescriptionIcon className="column is-1">
                <DescriptionImageContainer>
                  <img src={ item.icon } alt="" />
                </DescriptionImageContainer>
              </DescriptionIcon>
              <DescriptionContent className="column">
                { item.description }
              </DescriptionContent>
            </DescriptionContainer>
          </>
        )) }
        <HR />
        { processing && (
          <>
            <Header class="title" marginBottom="50px">{ processing.header }</Header>
            <ProcessingContainer>
              {
                processing.features.map((item) => (
                  <ProcessingContainerHalf>
                    <Subheader class="subtitle" centered="center" marginBottom="10px">
                      { item.title }
                    </Subheader>
                    { item.desc }
                  </ProcessingContainerHalf>
                ))
              }
            </ProcessingContainer>
            <ProcessingImageContainer>
              <img src={ processing.img } alt="" />
            </ProcessingImageContainer>
            <HR />
          </>
        ) }
        { precision && (
          <>
            <Header class="title" marginTop="50px">{ precision.header }</Header>
            { marginTop && <div style={ { 'marginTop': marginTop } }></div> }
            <img src={ precision.image } alt="" />
            <SupportDescription marginTop="50px">{ precision.description }</SupportDescription>
            <HR />
          </>
        ) }
        { support && (
          <Fragment>
            <Header class="title" marginTop="50px">{ support.header }</Header>
            <img src={ support.image } alt="" />
            <SupportDescription marginTop="50px">{ support.description }</SupportDescription>
          </Fragment>
        ) }

      </div>
    </section>
  );
}

export default ProductContentTemplate;
