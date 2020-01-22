import React from 'react';
import { Link } from 'react-router-dom';

export default function Details() {
    return (
      <div to='/'>
        <h1>Welcome to the details page</h1>
        <Link to='/' >Back to homepage</Link>
      </div>
    )
  }