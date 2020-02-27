import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import galleryGet from '../frontend/components/gallery-get';
import './Details.css';
import './components/Button/Button.css';


export default class Details extends Component {
  constructor() {
    super();
    this.state = {
        film: {}
      };
    }

    componentDidMount() {
      let filmId = this.props.match.params.filmId;
      let film = galleryGet()
        .find((film) => film.id === filmId);
      this.setState({film});
    }

    render() {
      if(this.state.film === undefined) {
        return <Redirect to='/not-found' />;
      } else {
        return (
          <div className='container'>

              <div className='sections'>
                <div>
                  <h1>{this.state.film.name}</h1>
                </div>
                <div>         
                  <img src={this.state.film.image} alt={this.state.film.name} />
                  <Link className="btn" to='/' >Back to homepage</Link>
                </div>
              </div>

              <div className='sections'>
                <h2>Synopsis</h2>
                <p>{this.state.film.synopsis}</p>
                <div>
                  {this.state.film.video}
                </div>
                <CaptureUserEvent />
              </div>
          </div>
        )};
    }
 }

//Button
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