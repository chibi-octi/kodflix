import React from 'react';

export default function Cards(props) {
    return (
      <div className="item">
        <img className="resize" src={props.image} alt={`Animation title ${props.name}`} />
        <div className="overlay">
          <h2>{props.name}</h2>
        </div>
      </div>)
    };

