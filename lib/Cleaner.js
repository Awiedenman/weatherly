
export const currWeatherCleaner = (data) => {
    let currentLocation = data.current_observation.display_location.full;
    let currentDate = data.current_observation.observation_time.split(' ').slice(3, 5);
    let currentTemp = data.current_observation.temp_f;
    let currentExpectHigh = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    let currentExpectLow = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    let currentWeatherDescrip = data.current_observation.weather;
    let currWeatherIcon = data.forecast.txt_forecast.forecastday[0].icon_url;
    const almost = currentDate.join();
    const space = ' ';
    currentDate = almost.split(',').join(space).trim();
   
    const currWeatherClean = {
        currDate: currentDate,
        currTemp: currentTemp,
        currExpectHigh: currentExpectHigh,
        currExpectLow: currentExpectLow,
        currLocation: currentLocation,
        currWeatherDescrip: currentWeatherDescrip,
        currWeatherIcon: currWeatherIcon
    }

    return (
        currWeatherClean
    );
};

export const sevenHrCleaner = (data) => {
    return (
        [
            { hour: data.hourly_forecast[0].FCTTIME.hour, hourTemp: data.hourly_forecast[0].temp.english, hourIcon: data.hourly_forecast[0].icon_url, hourCondition: data.hourly_forecast[0].condition },
            { hour: data.hourly_forecast[1].FCTTIME.hour, hourTemp: data.hourly_forecast[1].temp.english, hourIcon: data.hourly_forecast[1].icon_url, hourCondition: data.hourly_forecast[1].condition },
            { hour: data.hourly_forecast[2].FCTTIME.hour, hourTemp: data.hourly_forecast[2].temp.english, hourIcon: data.hourly_forecast[2].icon_url, hourCondition: data.hourly_forecast[2].condition },
            { hour: data.hourly_forecast[3].FCTTIME.hour, hourTemp: data.hourly_forecast[3].temp.english, hourIcon: data.hourly_forecast[3].icon_url, hourCondition: data.hourly_forecast[3].condition },
            { hour: data.hourly_forecast[4].FCTTIME.hour, hourTemp: data.hourly_forecast[4].temp.english, hourIcon: data.hourly_forecast[4].icon_url, hourCondition: data.hourly_forecast[4].condition },
            { hour: data.hourly_forecast[5].FCTTIME.hour, hourTemp: data.hourly_forecast[5].temp.english, hourIcon: data.hourly_forecast[5].icon_url, hourCondition: data.hourly_forecast[5].condition },
            { hour: data.hourly_forecast[6].FCTTIME.hour, hourTemp: data.hourly_forecast[6].temp.english, hourIcon: data.hourly_forecast[6].icon_url, hourCondition: data.hourly_forecast[6].condition }
        ]
    );
};

export const tenDayCleaner = (data) => {
    return (
        [
            {
                month: data.forecast.simpleforecast.forecastday[0].date.month,
                day: data.forecast.simpleforecast.forecastday[0].date.day,
                high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
                low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
                conditions: data.forecast.simpleforecast.forecastday[0].conditions,
                icon: data.forecast.simpleforecast.forecastday[0].icon_url
            },
            {
                month: data.forecast.simpleforecast.forecastday[1].date.month,
                day: data.forecast.simpleforecast.forecastday[1].date.day,
                high: data.forecast.simpleforecast.forecastday[1].high.fahrenheit,
                low: data.forecast.simpleforecast.forecastday[1].low.fahrenheit,
                conditions: data.forecast.simpleforecast.forecastday[1].conditions,
                icon: data.forecast.simpleforecast.forecastday[1].icon_url
            },
            {
                month: data.forecast.simpleforecast.forecastday[2].date.month,
                day: data.forecast.simpleforecast.forecastday[2].date.day,
                high: data.forecast.simpleforecast.forecastday[2].high.fahrenheit,
                low: data.forecast.simpleforecast.forecastday[2].low.fahrenheit,
                conditions: data.forecast.simpleforecast.forecastday[2].conditions,
                icon: data.forecast.simpleforecast.forecastday[2].icon_url
            },
            {
                month: data.forecast.simpleforecast.forecastday[3].date.month,
                day: data.forecast.simpleforecast.forecastday[3].date.day,
                high: data.forecast.simpleforecast.forecastday[3].high.fahrenheit,
                low: data.forecast.simpleforecast.forecastday[3].low.fahrenheit,
                conditions: data.forecast.simpleforecast.forecastday[3].conditions,
                icon: data.forecast.simpleforecast.forecastday[3].icon_url
            },
            {
                month: data.forecast.simpleforecast.forecastday[4].date.month,
                day: data.forecast.simpleforecast.forecastday[4].date.day,
                high: data.forecast.simpleforecast.forecastday[4].high.fahrenheit,
                low: data.forecast.simpleforecast.forecastday[4].low.fahrenheit,
                conditions: data.forecast.simpleforecast.forecastday[4].conditions,
                icon: data.forecast.simpleforecast.forecastday[4].icon_url
            },
            {
                month: data.forecast.simpleforecast.forecastday[5].date.month,
                day: data.forecast.simpleforecast.forecastday[5].date.day,
                high: data.forecast.simpleforecast.forecastday[5].high.fahrenheit,
                low: data.forecast.simpleforecast.forecastday[5].low.fahrenheit,
                conditions: data.forecast.simpleforecast.forecastday[5].conditions,
                icon: data.forecast.simpleforecast.forecastday[5].icon_url
            },
            {
                month: data.forecast.simpleforecast.forecastday[6].date.month,
                day: data.forecast.simpleforecast.forecastday[6].date.day,
                high: data.forecast.simpleforecast.forecastday[6].high.fahrenheit,
                low: data.forecast.simpleforecast.forecastday[6].low.fahrenheit,
                conditions: data.forecast.simpleforecast.forecastday[6].conditions,
                icon: data.forecast.simpleforecast.forecastday[6].icon_url
            },
            {
                month: data.forecast.simpleforecast.forecastday[7].date.month,
                day: data.forecast.simpleforecast.forecastday[7].date.day,
                high: data.forecast.simpleforecast.forecastday[7].high.fahrenheit,
                low: data.forecast.simpleforecast.forecastday[7].low.fahrenheit,
                conditions: data.forecast.simpleforecast.forecastday[7].conditions,
                icon: data.forecast.simpleforecast.forecastday[7].icon_url
            },
            {
                month: data.forecast.simpleforecast.forecastday[8].date.month,
                day: data.forecast.simpleforecast.forecastday[8].date.day,
                high: data.forecast.simpleforecast.forecastday[8].high.fahrenheit,
                low: data.forecast.simpleforecast.forecastday[8].low.fahrenheit,
                conditions: data.forecast.simpleforecast.forecastday[8].conditions,
                icon: data.forecast.simpleforecast.forecastday[8].icon_url
            },
            {
                month: data.forecast.simpleforecast.forecastday[9].date.month,
                day: data.forecast.simpleforecast.forecastday[9].date.day,
                high: data.forecast.simpleforecast.forecastday[9].high.fahrenheit,
                low: data.forecast.simpleforecast.forecastday[9].low.fahrenheit,
                conditions: data.forecast.simpleforecast.forecastday[9].conditions,
                icon: data.forecast.simpleforecast.forecastday[9].icon_url
            }
            
        ]
    );
};





