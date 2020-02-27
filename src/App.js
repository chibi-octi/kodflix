import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import Details from './pages/Details';
import NotFound from './components/NotFound/NotFound';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App app-background">
      <div className='body'>
        <Router >
          <Menu />
          <Switch>
            <div className="switch-section">
              <Route className="route-section" exact path='/' component={Gallery} />
              <Route exact path='/not-found' component={NotFound} />
              <Route exact path='/:filmId' component={Details} />
            </div>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
