var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d2bb9a517c2e422d34d2d2d0f5de6bde&units=imperial';

module.exports = {
    getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(res){
        debugger;
if(res.data.cod && res.data.message){
    throw new Error(res.data.module);
}else{
    return res.data.main.temp;
}

    }, function(res){
throw new Error(res.data.message);
    });
}
};