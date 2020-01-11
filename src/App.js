import React from 'react';
import film1 from './images/film-spirited.jpg';
import film2 from './images/film-arrietty.jpg';
import film3 from './images/film-nausicaa.jpg';
import film4 from './images/film-mary.jpg';
import film5 from './images/film-ponyo.jpg';
import film6 from './images/film-whisper.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <img src={film1} alt="Sprited away" />
        </div>
        <div className="item">
          <img src={film2} alt="Arrietty" />
        </div>
        <div className="item">
          <img src={film3} alt="Nausicaa" />
        </div>
        <div className="item">
          <img src={film4} alt="Mary" />
        </div>
        <div className="item">
          <img src={film5} alt="Ponyo" />
        </div>
        <div className="item">
          <img src={film6} alt="Whisper" />
        </div>
      </div>
  </div>
  );
}

export default App;
