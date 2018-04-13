import React from 'react';
import '../Styles/SevenHr.css';
import Card from './Card';

const SevenHr = (props) => {
  const { hourArray } = props;
  // console.log(props)
  // const { hour, currentTemp, currentCondition } = sevenHrArray;

  return (
    <div>
       {
          hourArray.map((hourObj) => {
            return (
              <Card 
                key = {hourObj.hour}
                hour= { hourObj.hour }
                hourTemp={ hourObj.hourTemp }
                hourCondition={ hourObj.hourCondition }
              />
            );
          })
        }
    </div>
  );
};


export default SevenHr;