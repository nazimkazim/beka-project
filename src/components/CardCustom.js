import React from 'react'
import styled from 'styled-components'



export default function CustomCard(props) {
  const Card = styled.div`
    max-width: 600px;
    min-height: 350px
    margin: 40px auto;
    background-color: #F7F7E9;
    border-radius:10px;
    color: #f4f6f5;
    overflow: hidden;
    box-shadow: 5px 5px 0 0 #aaa;
  `

  const Header = styled.h1`
    margin: 0;
    padding: 20px;
    text-align: center;
    font-size:24px;
    font-family: Roboto Slab;
    font-weight: 700;
    background-color: #2e3836;
  `

  const Image = styled.img`
    float: left;
    width: 200px;
    height: 200px;
    margin: 20px;
    object-fit:contain;
    position: relative;
    z-index: 1;

    @media (max-width: 414px) {
      width:100px;
      height: 100px;
      float: center;
      margin: 10px;
    }
  `

  const Bio = styled.p`
    position: relative;
    margin: 20px;
    font-size:16px;
    color:#1c221f;
    font-family: Merriweather Sans;
  `
  return (
    <>
      {props.data.map((item, index) => (
        <Card key={index}>
        <Header>
          {item.name}
        </Header>
        <Image src={item.photo} alt=""/>
        <Bio>
          {item.bio}
        </Bio>
      </Card>
      ))}
    </>
    

  )
}
