import React from 'react';
import { Link } from 'react-router-dom';
import CardOverlay from './Card-Overlay';


export default function Cards(props) {
    return (
      <Link to={`/${props.id}`} className="item">
        <img className="resize" src={props.image} alt={`Animation title ${props.name}`} />
        <CardOverlay />
      </Link>)
    };



