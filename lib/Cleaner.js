
export const currWeatherCleaner = (data) => {
    let currentLocation = data.current_observation.display_location.full;
    let currentDate = data.current_observation.observation_time.split(' ').slice(3, 5);
    let currentTemp = data.current_observation.temp_f;
    let currentExpectHigh = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    let currentExpectLow = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    let currentWeatherDescrip = data.current_observation.weather;
    let currentDisplayIcon = data.forecast.txt_forecast.forecastday[0].icon_url;
    const almost = currentDate.join();
    const space = ' ';
    currentDate = almost.split(',').join(space).trim();

    return ({
        currDate: currentDate,
        currTemp: currentTemp,
        currExpectHigh: currentExpectHigh,
        currExpectLow: currentExpectLow,
        currLocation: currentLocation,
        currWeatherDescrip: currentWeatherDescrip,
        currDisplayIcon: currentDisplayIcon
    });
};


export const sevenHrCleaner = (data) => {
    console.log('happy')

    return ({
        happy: 'happy'
    });
};





