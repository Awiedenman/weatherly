import React from 'react';
import '../Styles/CurrentWeather.css';
// import PropTypes from 'prop-types';


const CurrentWeather = (props)=>{
  // console.log(props.CurrentWeather.currDate)
  const { 
    currCity,
    currState,
    currTemp,
    currExpectHigh,
    currExpectLow,
    currDate,
    currWeatherDescrip,
    currWeatherIcon
  } = props.currWeatherObj;
 

return (
  <div className="curr_weather">
        <h2 className="curr_location">{currCity}, {currState}</h2>
        <p className="curr_temp">{currTemp}</p>
        <p className="curr_high">HIGH/{currExpectHigh}</p>
        <p className="curr_low">LOW/{currExpectLow}</p>
        <p className="curr_date">{currDate}</p>
        <img className="curr_weather-icon" src={currWeatherIcon}/>
        <p className="curr_weather-descrip">{currWeatherDescrip}</p>
  </div>
    );  
};


export default CurrentWeather;