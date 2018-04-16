import React from 'react';
import { Component } from 'react';
import '../Styles/App.css';
// import data from '../Data/mock-data';
import CurrentWeather from './CurrentWeather';
import SevenHr from './SevenHr';
import TenDay from './TenDay';
import Search from './Search';
import apiCall from './api';
import { currWeatherCleaner, sevenHrCleaner, tenDayCleaner } from './Cleaner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currLocation: '',
      currWeatherObj: {},
      hourArray: [],
      dayArray: [],
      toggleForecast: true,
    };

    this.cleanData = this.cleanData.bind(this);
    this.toggleForecast = this.toggleForecast.bind(this);
    this.updateStateFromSearch = this.updateStateFromSearch.bind(this);
  }

  cleanData(data) {
    const currWeatherObj = currWeatherCleaner(data);
    const hourArray = sevenHrCleaner(data);
    const dayArray = tenDayCleaner(data);

    this.setState({ currWeatherObj, hourArray, dayArray })
  }

  updateStateFromSearch(city) {
    this.setState({
      currLocation : city})
  }

  toggleForecast(event) {
    this.setState({
      toggleForecast: !this.state.toggleForecast
    })
  }
//currLocationCity : data.current_observation.display_location.city
  //currLocationState : data.current_observation.display_location.state
  //cuurTemp : data.current_observation.temp_f
  componentDidMount() {
   apiCall()
   .then(data => {
    // console.log(data)
    this.cleanData(data)   
})

  }

  render() {
    // console.log(this.state)
    return (
      <div className="main-page">
        <div className="top-section">
          <CurrentWeather currWeatherObj={ this.state.currWeatherObj }/>
          <Search updateStateFromSearch={ this.updateStateFromSearch }/>
        </div>
        <div className="bottom-section">
          <button onClick={this.toggleForecast} type="button" className="toggle">CLICK - 7hr / 10day</button>
          {
            this.state.toggleForecast ?
            <SevenHr hourArray={this.state.hourArray}/> :
            <TenDay dayArray={this.state.dayArray}/>
          }     
        </div>
      </div>
    );
  }
}

export default App;