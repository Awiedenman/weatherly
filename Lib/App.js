import React from 'react';
import { Component } from 'react';
import '../Styles/App.css';
import data from '../Data/mock-data';
import CurrentWeather from './CurrentWeather';
import SevenHr from './SevenHr';
import TenDay from './TenDay';
import Search from './Search';
import apiKey from './apiKey'
import apiCall from './api'
import { currWeatherCleaner, sevenHrCleaner, tenDayCleaner } from './Cleaner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currWeatherObj: {},
      hourArray: [],
      dayArray: [],
      toggleForecast: true,
    };

    this.cleanData = this.cleanData.bind(this);
    this.toggleForecast = this.toggleForecast.bind(this);
  }

  // apiCall() {
  //   fetch(`http://api.wunderground.com/api/${apiKey}/conditions/geolookup/hourly/forecast10day/q/CO/Denver.json`)
  //     .then(reponse => reponse.json())
  //     .then(data => {
  //      return this.cleanData(data)
  //     })
  //     .catch(error => console.log('error', error))

  // }

  cleanData() {
    const currWeatherObj = currWeatherCleaner(data);
    const hourArray = sevenHrCleaner(data);
    const dayArray = tenDayCleaner(data);
    // const nextState = Object.assign({}, { currWeatherObj: currWeatherClean }, { hourArray: sevenHrClean } );
    // const { currWeatherObj, hourArray } = nextState;

    this.setState({ currWeatherObj, hourArray, dayArray })
  }

  toggleForecast(event) {
    this.setState({
      toggleForecast: !this.state.toggleForecast
    })
  }

  // componentDidMount() {
  //   fetch(this.apiCall()).then((response) => {



  //     response.json()).then((data)=> {
  //       // setState(data)
  //       this.cleanData(data);//run our JSON.data throuhg our cleaner in this functionality   
  //     })
  componentDidMount() {
   const api = apiCall();
  }
  

  render() {
    console.log(this.state)
    return (
      <div className="main-page">
        <div className="top-section">
          <CurrentWeather currWeatherObj={this.state.currWeatherObj} />
          <Search />
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