import React from 'react';
import { Component } from 'react';
import '../Styles/App.css';
import data from '../Data/mock-data.js';
import CurrentWeather from './CurrentWeather.js';


class App extends Component {
  constructor() {
    super();
      
  }

  render () {
    return (
      <div className="main-page"> 
        <div className="top-section">
          <CurrentWeather
            location={data.current_observation.display_location.full}
            currTemp
          />  
        </div>
        <div className="bottom-section">
        </div>      
      </div>
        );
  }
}

export default App;