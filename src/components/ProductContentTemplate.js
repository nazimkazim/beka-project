import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  font-family:Roboto;
  font-size:30px;
  font-weight:bold;
`

const Subheader = styled.h2`
  font-family:Roboto;
  font-size:20px;
  font-weight:semi-bold;
  margin-top:80px;
`

function ProductContentTemplate({header, subheader}) {

  return (
    <section class="section">
    <div class="container">
      <Header class="title">{header}</Header>
      <Subheader class="subtitle">
        {subheader}
      </Subheader>
    </div>
  </section>
  )
}

export default ProductContentTemplate
