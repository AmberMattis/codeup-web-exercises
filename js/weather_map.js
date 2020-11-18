$(document).ready(function() {
    "use strict"

    function getTodaysWeather() {
       var requestWeather = $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: openWeather,
            q: "San Antonio, US",
           json
        });
           requestWeather.done(function (data) {
            console.log("weather", data);
            renderWeather(data);
        })
    }

    function renderWeather(datas) {
        var weatherHTML = "";

         for(const data of Object.keys(datas)){
            weatherHTML += "<div class=\"card\" style=\"width: 18rem;\">";
            weatherHTML += "<img class='card-img-top'>";
            weatherHTML += "<div class='card-body'>";
            weatherHTML += "<h5 class=\"card-title\">Current Weather</h5>";
            weatherHTML += "<p class=\"card-text\"> + data.name + </p>";
            weatherHTML += "<p class=\"card-text\"> + data.main.temp + </p>";
            weatherHTML += "<p class=\"card-text\"> + weather[0].description + </p>";
            weatherHTML += "</div>";
            weatherHTML += "</div>";

        };
        $("#week").html(weatherHTML)
    }

    $(window).load(getTodaysWeather());
});




