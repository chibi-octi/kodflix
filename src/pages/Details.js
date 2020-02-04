import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';
/* import Card from './Card';
import galleryGet from './gallery-get'; */

export default function Details() {
    return (
      <div className='container'>
        <div className='sections'>
          <div>
            
            {/* {
              galleryGet().map( film => (
              <Card 
                image={film.image} />
              ))
            } */}
            
            <h1>Welcome to the details page</h1>
            <Link to='/' >Back to homepage</Link>
            <br></br>
            <CaptureUserEvent />
          </div>
        </div>

        <div className='sections'>
          <div>
            <iframe title="video"
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

  class CaptureUserEvent extends React.Component {
    constructor() {
      super();
      this.state = {logs: [] };
    }
    handleMouse(message) {
      let { logs } = this.state;
      logs.push(message)
      this.setState({ logs });
    }
    render() {
      return(
        <div>
          <div>Welcome to Events!</div>
          <button className="clickMe" 
            onClick={() => this.handleMouse('The button was clicked')}
            onMouseEnter={() => this.handleMouse('The pointer is on the button')}
            onMouseLeave={() => this.handleMouse("I'm leaving")}
            >Click me
          </button>
          <div>
            {this.state.logs.map(( log, index ) => (
              <div key={index}>{log}</div>
              ))}
          </div>
        </div>
      );
    }
  }