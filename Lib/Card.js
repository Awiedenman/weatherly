import React from 'react';
import '../Styles/Card.css';

const Card = (props) => {
  // const { hour, hourTemp, hourCondition  } = props

  // if (props.hourArray) {
  
  if(props.hour) {
    return (

        <div className="card_outline">
            <h3>TIME: {props.hour + ":00"}</h3>
            <h3>TEMP: {props.hourTemp}</h3>
            <h3>{props.hourCondition}</h3>
        </div>
    )  

  } else {
    return (
        <div className="card_outline">
            <h3>{ props.day  }th day</h3>
            <h3>of the { props.month }th month</h3>
            <h3>HIGH:  { props.high }</h3>
            <h3>LOW:  { props.low }</h3>
            <h3>{ props.conditions }</h3>
            <h3>{ props.icon }</h3>
        </div>
    )
  }
      
}



export default Card;