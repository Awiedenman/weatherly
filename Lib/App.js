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
import Welcome from './Welcome';

class App extends Component {
  constructor() {
    super();
    this.state = {
      citySt: '',
      currCity: '',
      currState: '',
      currWeatherObj: {},
      hourArray: [],
      dayArray: [],
      toggleForecast: true,
    };

    this.cleanData = this.cleanData.bind(this);
    this.toggleForecast = this.toggleForecast.bind(this);
    this.updateStateFromSearch = this.updateStateFromSearch.bind(this);
    // this.createLocalStorage = this.createLocalStorage.bind(this);
  }

  cleanData(data) {
    const currWeatherObj = currWeatherCleaner(data);
    const hourArray = sevenHrCleaner(data);
    const dayArray = tenDayCleaner(data);

    this.setState({ currWeatherObj, hourArray, dayArray });
  }

  updateStateFromSearch(citySt) {
    const city = citySt.split(', ')[0];
    const state = citySt.split(', ')[1];
    this.setState({
    currCity : city, currState: state});
    localStorage.setItem('citySt', citySt);
      apiCall(city, state)
      .then(data => {    
       this.cleanData(data);
      //  this.createLocalStorage(city, state);
       
      });    
  }

  // createLocalStorage(city){
  //   localStorage.setItem('citySt', this.state.citySt);
  // }

  toggleForecast(event) {
    this.setState({
      toggleForecast: !this.state.toggleForecast
    });
  }
  
  componentDidMount() {
    // const persistCity = localStorage.getItem('city');
    // console.log(localStorage.key('city'))
   apiCall()
   .then(data => {  
    this.cleanData(data);   
  });
}

  render() {
    console.log(localStorage);
    if (!localStorage.citySt) {
      return(
      <div>
       <Welcome 
            updateStateFromSearch={ this.updateStateFromSearch }
            createLocalStorage={ this.createLocalStorage } />
     </div> 
    );
   } else {
    return (
      <div className="main-page">
        <div className="top-section">
          <CurrentWeather currWeatherObj={ this.state.currWeatherObj } />
          <Search updateStateFromSearch={ this.updateStateFromSearch } />
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
}

export default App;