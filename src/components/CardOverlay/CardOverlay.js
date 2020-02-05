import React from 'react';
import './CardOverlay.css';


export default function CardOverlay(props) {
    return  (
      <div className="overlay">
        <div>
          <h2>{props.name}</h2>
          <h3>{props.rating}</h3>
        </div>
      </div>
    )
  };