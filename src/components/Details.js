import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import galleryGet from './gallery-get';
import Gallery from './Gallery';

export default function Details() {
    return (
      <div className='container'>
        <div className='sections'>
          <div>
            {
              galleryGet().map( film => (
              <Card 
                image={film.image} />
              ))
            }
            <h1>Welcome to the details page</h1>
            <Link to='/' >Back to homepage</Link>
          </div>
        </div>

        <div className='sections'>
          <div>
            <iframe 
              width="99.99%" height="600" 
              src="https://www.youtube.com/embed/ByXuk9QqQkk?controls=0" 
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>

      </div>
    )
  }