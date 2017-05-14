var request = require('request');
var yargs = require('yargs');
var jo = require('./geocode/geocode.js');


const argv = yargs
    .options({


        a: {
            demand: true,
            alias: 'address',
            describe: 'enter address',
            string: true


        }

    })
    .help()
    //.alias('help', 'h')
    .argv;


jo.jio(argv.address, (error, message) => {
    if (error)
        console.log(error);


    else
        console.log(message);




});
