import React from 'react';

export default function VideoComponent(props) {
  return (
    <div className="sobereye-video-container">
      <h1>{props.header}</h1>
      <iframe width="840" title={props.uniqueTitle} height="472.5" src={props.src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}
