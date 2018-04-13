import React from 'react';
import '../Styles/SevenHr.css';
import Card from './Card';


const SevenHr = (props) => {
  const { happy } = props;

  return(
    <div>
      <Card happy={ happy }
      />
    </div>
  )

}

export default SevenHr