import React from 'react';


export default function CardOverlay(props) {
    return  (
      <div className="overlay">
        <div>
          {props.name},
          {props.rating}
        </div>
      </div>
    )
  };