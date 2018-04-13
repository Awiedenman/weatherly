import React from 'react';
import { Component } from 'react';
import '../Styles/App.css';
import data from '../Data/mock-data';
import CurrentWeather from './CurrentWeather';
import SevenHr from './sevenHr';
import { currWeatherCleaner, sevenHrCleaner } from './Cleaner';

class App extends Component {
  constructor() {
    super();
    this.cleanData = this.cleanData.bind(this);
    this.state = {
      // currDate: '',
      // currTemp: '',
      // currLocation: '',
      // currExpectHigh: '',
      // currExpectLow: '',
      // currWeatherDescrip: '',
      // currWeatherIcon: '',
      hourArray: [],
    };
  }

  cleanData() {
    const newState = currWeatherCleaner(data);
    const sevenHrClean = sevenHrCleaner(data);
    // this.setState({hourArray : sevenHrClean})
    // console.log(sevenHrClean)

    const nextState = Object.assign({}, newState, { hourArray: sevenHrClean } );
    // this.setState({hourArray : sevenHourClean})
    const { currDate, currTemp, currExpectHigh, currExpectLow, currLocation, currWeatherDescrip, currDisplayIcon, hourArray} = nextState;

    this.setState({ currDate, currTemp, currExpectHigh, currExpectLow, currLocation, currWeatherDescrip, currDisplayIcon, hourArray })
console.log(this.state);
  }

  componentDidMount() {
    this.cleanData();//run our JSON.data throuhg our cleaner in this functionality
  }

  render() {
    return (
      <div className="main-page">
        <div className="top-section">
          <CurrentWeather
            currLocation={this.state.currLocation}
            currTemp={this.state.currTemp}
            currExpectHigh={this.state.currExpectHigh}
            currExpectLow={this.state.currExpectLow}
            currDate={this.state.currDate}
            currWeatherIcon={this.state.currDisplayIcon}
            currWeatherDescrip={this.state.currWeatherDescrip}
          />
        </div>
        <div className="bottom-section">
          {/* <Button />
          <Button /> */}
          <SevenHr
            hourArray={this.state.hourArray}
          />
        </div>  
      </div>
    );
  }
}

export default App;