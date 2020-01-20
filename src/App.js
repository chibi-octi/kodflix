import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Gallery from './components/Gallery';

import './App.css';

function Home(){
  return (
    <div>
      <div>Welcome</div>
      <Link to={'/projects'}>My projects</Link>
    </div>);
}

function Projects(){
  return (
    <div>
      <div>Projects</div>
      <Link to={'/home'}>Home</Link>
    </div>);
}


function App() {
  return (
    <div className="App">
      <h1 className="title">Kodflix</h1>
        {/* <BrowserRouter>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
        </BrowserRouter> */}

        <Gallery />
    </div>
  );
}


export default App;
