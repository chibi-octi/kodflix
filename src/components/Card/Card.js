import React from 'react';
import { Link } from 'react-router-dom';
import CardOverlay from '../CardOverlay/CardOverlay';

export default function Card(props) {
    return (
      <Link to= {`/${props.id}`} className="item">
        <img src={props.image} alt={`Animation title ${props.name}`} />
        <div className="overlay">
          <CardOverlay name={props.name} rating={props.rating}/>
          
        </div>
      </Link>
      )
    };



