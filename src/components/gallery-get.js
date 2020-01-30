import film1 from '../images/film-spirited.jpg';
import film2 from '../images/film-arrietty.jpg';
import film3 from '../images/film-nausicaa.jpg';
import film4 from '../images/film-mary.jpg';
import film5 from '../images/film-ponyo.jpg';
import film6 from '../images/film-whisper.jpg';

export default function getGallery() {
    return [
      {id: 'film1', name: 'Spirited Away', image: film1, rating:'3 stars'},
      {id: 'film2', name: 'Arrietty', image: film2, rating:'3 stars'},
      {id: 'film3', name: 'Nausicaa of the Valley of the Wind', image: film3, rating:'3 stars'},
      {id: 'film4', name: 'Mary and the Witch\'s Flower', image: film4, rating:'3 stars'},
      {id: 'film5', name: 'Ponyo', image: film5, rating:'3 stars'},
      {id: 'film6', name: 'Whisper of the Heart', image: film6, rating:'3 stars'},
    ]
  }
