
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
    console.log(currentWeatherDescrip)
    const currWeatherClean = {
        currDate: currentDate,
        currTemp: currentTemp,
        currExpectHigh: currentExpectHigh,
        currExpectLow: currentExpectLow,
        currLocation: currentLocation,
        currWeatherDescrip: currentWeatherDescrip,
        currWeatherIcon: currWeatherIcon
    }
    console.log(currWeatherClean);

    return (
       currWeatherClean 
    );
};

export const sevenHrCleaner = (data) => {
    // console.log(data.hourly_forecast);

    return ( 
        [
            { hour: data.hourly_forecast[0].FCTTIME.hour, hourTemp: data.hourly_forecast[0].temp.english, hourCondition: data.hourly_forecast[0].condition },
            { hour: data.hourly_forecast[1].FCTTIME.hour, hourTemp: data.hourly_forecast[1].temp.english, hourCondition: data.hourly_forecast[1].condition },
            { hour: data.hourly_forecast[2].FCTTIME.hour, hourTemp: data.hourly_forecast[2].temp.english, hourCondition: data.hourly_forecast[2].condition },
            { hour: data.hourly_forecast[3].FCTTIME.hour, hourTemp: data.hourly_forecast[3].temp.english, hourCondition: data.hourly_forecast[3].condition },
            { hour: data.hourly_forecast[4].FCTTIME.hour, hourTemp: data.hourly_forecast[4].temp.english, hourCondition: data.hourly_forecast[4].condition },
            { hour: data.hourly_forecast[5].FCTTIME.hour, hourTemp: data.hourly_forecast[5].temp.english, hourCondition: data.hourly_forecast[5].condition },
            { hour: data.hourly_forecast[6].FCTTIME.hour, hourTemp: data.hourly_forecast[6].temp.english, hourCondition: data.hourly_forecast[6].condition }
        ]
    );
};





