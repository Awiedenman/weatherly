import React from 'react';
import { Component } from 'react'
import '../Styles/App.css';
import data from '../Data/mock-data.js';
import CurrentWeather from './CurrentWeather.js';

class App extends Component {
  constructor() {
    super();
      
  }

  render () {
    console.log('poop')
    return (
            <div>    
                <h1> i love the the weather!</h1>
                <CurrentWeather 
                    weather={data.current_observation.display_location.full}
                    />      
            </div>
        )
  }
}

export default App;