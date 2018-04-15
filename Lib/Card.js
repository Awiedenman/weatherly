import React from 'react';
import '../Styles/Card.css';

const Card = (props) => {
  // const { hour, hourTemp, hourCondition  } = props

  // if (props.hourArray) {
  return (

      <div className="card_outline">

        <h3>{props.hour + ":00"}</h3>
        <h3>{props.hourTemp}</h3>
        <h3>{props.hourCondition}</h3>
      
   
  
      
        

         

            <h3>{ props.day  }</h3>
            <h3>{ props.month }</h3>
            <h3>{ props.high }</h3>
            <h3>{ props.low }</h3>
            <h3>{ props.conditions }</h3>
            <h3>{ props.icon }</h3>
        </div>
      
    )
}



export default Card;