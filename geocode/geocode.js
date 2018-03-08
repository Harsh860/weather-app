var request = require('request');
var jio = function(address, callback) {


    var encodedaddress = encodeURIComponent(address);


    request({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodedaddress,
        json: true
    }, (error, response, body) => {

        if (error) {
            callback('cannot connect to server');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('no such address exist or google api cannot find that address');
        } else if (body.status === 'UNKNOWN_ERROR') {
            callback('cannot find address');
        } else if (body.status === 'INVALID_REQUEST' || body.status !== 'OK') {
            callback('invalid address or address not filled');
        } else {

              
            callback(undefined, 'formatted address :' + body.results[0].formatted_address);



            if (body.results[0].address_components[body.results[0].address_components.length - 1].types == 'postal_code') {
                callback(undefined, 'pin code :' + body.results[0].address_components[body.results[0].address_components.length - 1].long_name);

            }
            callback(undefined, 'latitude :' + body.results[0].geometry.location.lat);
            callback(undefined, 'longitude :' + body.results[0].geometry.location.lng);



            request({
                url: 'https://api.darksky.net/forecast/aabeb8350a7ac1911dcfb87c6352af73/' + body.results[0].geometry.location.lat + ',' + body.results[0].geometry.location.lng,
                json: true
            }, (error, response, body) => {
                if (error) {
                    console.log('unable to connect to forecast.io server');
                } else if (response.statusCode === 404 || response.statusCode === 400) {
                    console.log('cannot fetch weather');
                } else {


                    callback(undefined, 'weather summary :' + body.currently.summary);
                    callback(undefined, 'wind address :' + body.currently.windSpeed + ' KM/hr');
                    callback(undefined, 'humidity :' + body.currently.humidity);
                    callback(undefined, 'temperature :' + 5 / 9 * (body.currently.temperature - 32) + ' °C ');
                }

            });




        }

    });
}




module.exports.jio = jio;




//aabeb8350a7ac1911dcfb87c6352af73