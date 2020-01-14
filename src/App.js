import React from 'react';
import Animation from './components/Animation';
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
        <Animation name='Spirited Away' image={film1}/>
        <Animation name='Arrietty' image={film2}/>
        <Animation name='Nausicaa of the Valley of the Wind' image={film3}/>
      </div>
      <div className="container">
        <Animation name="Mary and the Witch\'s Flower" image={film4}/>
        <Animation name='Ponyo' image={film5}/>
        <Animation name='Whisper of the Heart' image={film6}/>
      </div>

    </div>
  );
}



export default App;
