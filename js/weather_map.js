$(document).ready(function(){
    "use strict"


//     var sanWeather = $.get("http://api.openweathermap.org/data/2.5/weather?APPID=" + openWeather + "&q=San+Antonio,+US");
//
//     sanWeather.done(function(data,status,jqXhr){
//         console.log(data);
//         console.log(status);
//     })
 })

$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: openWeather,
    q: "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    console.log('5 day forecast', data);
});