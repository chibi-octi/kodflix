import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import Details from './components/Details';

import './App.css';

function App() {
  return (
    <div className="App">
          <h1 className="title">Kodflix</h1>
        <Router>
          <Route exact path='/' component ={Gallery} />
          <Route exact path='/:details' component ={Details} />
        </Router>
    </div>
  );
}




export default App;
