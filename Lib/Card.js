import React from 'react';
import '../Styles/Card.css';

const Card = (props) => {
  const { hour, hourTemp, hourCondition  } = props

  return(
    <div className = "card_outline">

      <h3>{ hour + ":00" }</h3>
      <h3>{ hourTemp }</h3>
      <h3>{ hourCondition }</h3>
    </div>
  )
}

export default Card;