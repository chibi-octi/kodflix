import React from 'react';
import Card from '../Card/Card';
import galleryGet from '../gallery-get';
import './Gallery.css'


export default function Gallery() {
    return (
      <div className="gallery">
        {
          galleryGet().map( film => (
          <Card 
            id={film.id} 
            name={film.name} 
            image={film.image} 
            rating={film.rating} />
          ))
        }
      </div>
    )
  };