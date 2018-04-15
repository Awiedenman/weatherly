import React from 'react';
import { Component } from 'react';
import '../Styles/App.css';
import data from '../Data/mock-data';
import CurrentWeather from './CurrentWeather';
import SevenHr from './SevenHr';
import TenDay from './TenDay';
import Search from './Search';
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

  cleanData() {
    const currWeatherObj = currWeatherCleaner(data);
    const hourArray = sevenHrCleaner(data);
    const dayArray = tenDayCleaner(data)
    // const nextState = Object.assign({}, { currWeatherObj: currWeatherClean }, { hourArray: sevenHrClean } );
    // const { currWeatherObj, hourArray } = nextState;

    this.setState({ currWeatherObj, hourArray, dayArray })
  }

  toggleForecast(event) {
    this.setState({
      toggleForecast: !this.state.toggleForecast
    })
  }

  componentDidMount() {
    this.cleanData();//run our JSON.data throuhg our cleaner in this functionality   
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
          <button onClick={this.toggleForecast} type="button" className="toggle">CLICK - FORECAST</button>
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