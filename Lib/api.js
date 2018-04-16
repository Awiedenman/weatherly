import apiKey from './apiKey.js';

const apiCall = (city = 'Denver', state = 'CO') => {
    return fetch(`http://api.wunderground.com/api/${apiKey}/geolookup/conditions/forecast10day/hourly/q/${state}/${city}.json`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.log('error', error))
}


export default apiCall;