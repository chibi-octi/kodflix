import React from 'react';

export default function CardOverlay(props) {
    return  (
      <div>
        <div className="overlay">
          <h2>{props.name}</h2>
          <h3>{props.rating}</h3>
        </div>
      </div>
    )
  };