import React from 'react';
import { Component } from 'react';
import '../Styles/App.css';
import data from '../Data/mock-data';
import CurrentWeather from './CurrentWeather';
import { dateCleaner } from './Cleaner';

class App extends Component {
  constructor() {
    super(); 
    this.cleanData = this.cleanData.bind(this);
    this.state = {
      currDate : '',
    }
  }

  cleanData() {
    const currDate = dateCleaner(data)
    this.setState( {currDate} ) // currDate : currDate
  }

  componentDidMount() {
    this.cleanData();//run our JSON.data throuhg our cleaner in this functionality
  }

  render () {
    return (
      <div className="main-page"> 
        <div className="top-section">
          <CurrentWeather
            currLocation={data.current_observation.display_location.full}
            currTemp={data.current_observation.temp_f}
            currHighLow
            currDate={this.state.currDate}
            currWeatherIcon
            currWeatherDescrip={data.current_observation.weather}
          />  
        </div>
        <div className="bottom-section">
        </div>      
      </div>
        );
  }
}

export default App;