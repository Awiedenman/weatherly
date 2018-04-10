import React from 'react';
import '../Styles/CurrentWeather.css';
// import PropTypes from 'prop-types';


const CurrentWeather = (props)=>{
  const {location} = props;
  return (
      <div className ="current-weather">
        <h2>{location}</h2>
        <p> 65˚</p>
        <p> high / low </p>
      </div>
    );  
};


export default CurrentWeather;