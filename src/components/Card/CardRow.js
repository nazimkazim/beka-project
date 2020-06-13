import React from 'react'
import Card from './Card'

function CardRow(props) {
  return (
    <div className={`${props.class}-container`}>
      {props.data.map((item, index) => (
        <Card item={item} class={props.class}/>
      ))}
    </div>
  )
}

export default CardRow
