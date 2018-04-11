import React from 'react';
import '../Styles/CurrentWeather.css';
// import PropTypes from 'prop-types';


const CurrentWeather = (props)=>{
  const {location} = props;
  return (
      <div className="current-weather">
        <h2 className="location">{location}</h2>
        <p className="current-temp">45˚</p>
        <p className="current_high-low"> high / low</p>
      <p className="current_date">Arpil 10˚</p>
        <p className="current_weather-icon">picture</p>
        <p className="current_weather-description">Cloudy</p>
      </div>
    );  
};


export default CurrentWeather;