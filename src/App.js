import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import Details from './pages/Details';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <div className='body'>
        <h1 className="title">Kodflix</h1>
        
        <Router>
        <Menu />
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/:filmId' component={Details} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}




export default App;
