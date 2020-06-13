import React from 'react'

function Card(props) {
  return (
    <div className={`${props.class}-card`}>
      <div className="face face1">
        <div className="content">
          <div className="has-text-centered">
            <img src={props.item.icon} alt=""/>
          </div>
          <h3>{props.item.moto}</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
        <p>{props.item.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
