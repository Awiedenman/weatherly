import React from 'react';
import '../Styles/CurrentWeather.css';
// import PropTypes from 'prop-types';


const CurrentWeather = (props)=>{
  const {weather, } = props;
  return (
      <div>
        <h2>{weather}</h2>
      </div>
    );  
};


export default CurrentWeather;