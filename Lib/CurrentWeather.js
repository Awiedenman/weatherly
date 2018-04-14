import React from 'react';
import '../Styles/CurrentWeather.css';
// import PropTypes from 'prop-types';


const CurrentWeather = (props)=>{
  // console.log(props.CurrentWeather.currDate)
  const { 
    currLocation,
    currTemp,
    currExpectHigh,
    currExpectLow,
    currDate,
    currWeatherDescrip,
    currWeatherIcon
  } = props.currWeatherObj;
 

return (
  <div className="curr_weather">
        <h2 className="curr_location">{currLocation}</h2>
        <p className="curr_temp">{currTemp}</p>
        <p className="curr_high">{currExpectHigh}</p>
        <p className="curr_low">{currExpectLow}</p>
        <p className="curr_date">{currDate}</p>
        <img className="curr_weather-icon" src={currWeatherIcon}/>
        <p className="curr_weather-descrip">{currWeatherDescrip}</p>
  </div>
    );  
};


export default CurrentWeather;