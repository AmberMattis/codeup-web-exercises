$(document).ready(function() {
    "use strict"

    function getTodaysWeather() {

       var requestWeather = $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: openWeather,
            lon: -98.4916,
            lat: 29.4252,
            units: "imperial",
            exclude: "hourly,minutely,current"
        });
           requestWeather.done(function (data, status, jqXhm) {
            console.log(data,status);
            renderWeather(data);

        })

    }




    function renderWeather(data) {
        console.log(data);
        var weatherHTML = "";

         data.daily.slice(0,5).forEach(function(day){
            weatherHTML += '<div class="card" style="width: 18rem;">';
            weatherHTML += "<img class='card-img-top' src='http://openweathermap.org/img/wn/" + [day.weather[0].icon] + ".png'>";
            weatherHTML += '<div class="card-body">';
            weatherHTML += '<h5 class="card-title">' + "Weather" + '</h5>';
            weatherHTML += '<p class="card-text">' + day.temp.day + '</p>';
            weatherHTML += '<p class="card-text">' + day.weather[0].description + '</p>';
            weatherHTML += "</div>";
            weatherHTML += "</div>";

        });
        $("#week").html(weatherHTML)
    }

    $(window).load(getTodaysWeather());


    mapboxgl.accessToken = mapboxToken;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center:[-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
});




