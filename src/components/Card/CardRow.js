import React from 'react'
import Card from './Card'
import Pulse from 'react-reveal/Zoom';

function CardRow(props) {
  return (
    <div className={`${props.class}-container`}>
      <Pulse>
      {props.data.map((item, index) => (
        <Card item={item} class={props.class}/>
      ))}
      </Pulse>
    </div>
  )
}

export default CardRow
