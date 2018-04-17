import React from 'react';
import '../Styles/Card.css';

const Card = ( props ) => {
  // const { hour, hourTemp, hourCondition  } = props

  // if (props.hourArray) {
  
  if(props.hour) {
    return (

        <div className="card_outline-7hr">
            <h3>TIME: { props.hour + ":00" }</h3>
            <h3>TEMP: { props.hourTemp } ˚F</h3>
            <img src={ props.hourIcon }/>
            <h3>{ props.hourCondition }</h3>
        </div>
    )  

  } else {
    return (
        <div className="card_outline-10day">
            <h3>{ props.weekday }</h3>
            <h3>{ props.month }/{ props.day }</h3>
            <h3>HIGH:  { props.high } ˚F</h3>
            <h3>LOW:  { props.low } ˚F</h3>
            <img src={ props.icon }/>
            <h3>{ props.conditions }</h3>
        </div>
    )
  }
      
}



export default Card;
