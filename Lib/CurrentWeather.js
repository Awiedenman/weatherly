import React from 'react';
import '../Styles/CurrentWeather.css';
import PropTypes from 'prop-types';


const CurrentWeather = (props)=>{
const { currLocation, currTemp, currHighLow, currDate, currWeatherDescrip } = props;
  return (
      <div className="curr_weather">
        <h2 className="curr_location">{currLocation}</h2>
        <p className="curr_temp">{currTemp}</p>
        <p className="curr_high-low"> high / low</p>
        <p className="curr_date">{currDate}</p>
        <p className="curr_weather-icon">picture</p>
        <p className="curr_weather-descrip">{currWeatherDescrip}</p>
      </div>
    );  
};


export default CurrentWeather;