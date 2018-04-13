import React from 'react';
import '../Styles/Card.css';

const Card = (props) => {
  const { happy } = props

  return(
    <div className = "card_outline">

      <h3>{ happy }</h3>
    </div>
  )
}

export default Card;