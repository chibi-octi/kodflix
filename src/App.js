import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import Details from './components/Details';
import Menu from './components/Menu/Menu';


function App() {
  return (
    <div className="App">
      <div className='body'>
        <h1 className="title">Kodflix</h1>
        <Menu />
        <Router>
          <Route exact path='/' component ={Gallery} />
          <Route exact path='/:details' component ={Details} />
        </Router>
        </div>
    </div>
  );
}




export default App;
