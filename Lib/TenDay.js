import React from 'react';
import '../Styles/TenDay.css';
import Card from './Card';

const TenDay = (props) => {
  const { dayArray } = props;
  return (
    <div className="tenDayContainer">
      {
        dayArray.map((dayObj) => {
          return (
            <Card
              key={dayObj.day}
              weekday={dayObj.weekday}
              month={dayObj.month}
              day={dayObj.day}
              high={dayObj.high}
              low={dayObj.low}
              conditions={dayObj.conditions}
              icon={dayObj.icon}
            />
          );
        })
      }
    </div>
  );
};

export default TenDay;