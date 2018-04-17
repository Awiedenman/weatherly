
export const currWeatherCleaner = (data) => {
  let currentCity = data.current_observation.display_location.city;
  let currentState = data.current_observation.display_location.state;
  let currentDate = data.current_observation.observation_time.split(' ').slice(3, 5);
  let currentTemp = data.current_observation.temp_f;
  let currentExpectHigh = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  let currentExpectLow = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  let currentWeatherDescrip = data.current_observation.weather;
  let currWeatherIcon = data.forecast.txt_forecast.forecastday[0].icon_url;
  let currentWeatherSummary = data.forecast.txt_forecast.forecastday[0].fcttext;
  const almost = currentDate.join();
  const space = ' ';
  currentDate = almost.split(',').join(space).trim();

  const currWeatherClean = {
    currDate: currentDate,
    currTemp: currentTemp,
    currExpectHigh: currentExpectHigh,
    currExpectLow: currentExpectLow,
    currCity: currentCity,
    currState: currentState,
    currWeatherDescrip: currentWeatherDescrip,
    currWeatherIcon,
    currWeatherSummary: currentWeatherSummary
  };
  return (
    currWeatherClean
  );
};

export const sevenHrCleaner = (data) => {
  const sevenHr = data.map(hour => {
    return {
      hour: hour.FCTTIME.hour,
      hourTemp: hour.temp.english,
      hourIcon: hour.icon_url,
      hourCondition: hour.condition
    };
  }).slice(0, 7);
  return sevenHr;
};

export const tenDayCleaner = (data) => {
  const tenDay = data.map(day => {
    return {
      month: day.date.month,
      day: day.date.day,
      weekday: day.date.weekday,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit,
      conditions: day.conditions,
      icon: day.icon_url
    };
  });
  return tenDay;
};





