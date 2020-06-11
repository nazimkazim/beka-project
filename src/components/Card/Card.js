import React from 'react'

function Card(props) {
  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <img src={props.item.icon} alt=""/>
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
