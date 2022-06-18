import React from 'react';
import styled from 'styled-components';

function ButtonCustom(props) {
  const ButtonCustom = styled.button`
    width:${props => props.width || '300px'};
    height: ${props => props.height || '60px'};
    background:${props => props.background};
    border: solid ${props => props.borderThickness || '4px'};
    color:${props => props.color || '#3498db'};
    font-weight: bold;
    text-transform:uppercase;
    cursor:pointer;
    font-size:${props => props.fontSize || '16px'};
    position:relative

    @media (max-width: 414px) {
      width:${props => props.width || '200px'};
    }

    &:after {
      content: "";
      position:absolute;
      width:14px;
      height:4px;
      background:white;
      transform:skewX(50deg);
      transition: .4s linear;
      bottom:-4px;
      right:10%;
    }

    &:before {
      content: "";
      position:absolute;
      width:14px;
      height:4px;
      background:white;
      transform:skewX(50deg);
      transition: .4s linear;
      top:-4px;
      left:10%;
    }

    &:hover:before {
      left:80%;
    }

    &:hover:after {
      right:80%;
    }
  `;


  return (
    <ButtonCustom>
      Скачайте презентацию
    </ButtonCustom>
  );
}

export default ButtonCustom;