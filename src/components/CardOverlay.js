import React from 'react';
import galleryGet from './gallery-get';

export default function CardOverlay(props) {
    return  (
      <div className="overlay">
        <div>
          <h4>Hello</h4>
            {galleryGet().map( info => (
              <getGallery  
                name={info.name} 
                rating={info.rating} />
              ))}
          </div>
      </div>
    )
  };