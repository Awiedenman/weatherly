import apiKey from './apiKey.js';



const apiCall = ( city = 'Denver', state = 'CO' ) => {
    fetch(`http://api.wunderground.com/api/${apiKey}/conditions/geolookup/hourly/forecast10day/q/${state}/${city}.json`)
        .then(response => {
            console.log(response)
            response.json();
    });
        
        // .then(data => {
        //     return this.cleanData(data)
        // })
        // .catch(error => console.log('error', error))

}


export default apiCall;