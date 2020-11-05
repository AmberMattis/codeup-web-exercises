"use strict"

mapboxgl.accessToken = mapboxToken;

var mapVisual = {
    container: "map",
    style:'mapbox://styles/mapbox/streets-v11',
    center:[-98.4916, 29.4252],
    zoom:10
};

var map = new mapboxgl.Map(mapVisual);

//Create a marker on your map of the exact location of your favorite
// restaurant set the zoom to allow for best viewing distance


//City Marker Style

var cityMarker = {
   color: "red",
   draggable: true
}

//Food Marker Style

var foodMarker = {
    color: "purple",
    draggable: true,
}



//City Marker Location

var sanAntonioMarker = new mapboxgl.Marker(cityMarker)
    .setLngLat([-98.4861, 29.4260])
    .addTo(map);

//City Marker Popup

var cityPopup = new mapboxgl.Popup()
    .setText("Welcome To San Antonio")
    .addTo(map)

sanAntonioMarker.setPopup(cityPopup)


//Texas Roadhouse Location

var roadhouseMarker = new mapboxgl.Marker(foodMarker)
    .setLngLat([-98.335707,29.564636])
    .addTo(map);

// Roadhouse Marker Popup

var roadhousePopup = new mapboxgl.Popup()
    .setText("Welcome To Texas Roadhouse")
    .addTo(map)

roadhouseMarker.setPopup(roadhousePopup)


//--------------------------//


//Chick-Fil-A Location

var cfaMarker = new mapboxgl.Marker(foodMarker)
    .setLngLat([-98.322155, 29.576077])
    .addTo(map);

//Chick-Fil-A Popup

var cfaPopup = new mapboxgl.Popup()
    .setText("Welcome To Chick-Fil-A")
    .addTo(map)

cfaMarker.setPopup(cfaPopup)


//--------------------------//


// Wingstop Location

var wingstopMarker = new mapboxgl.Marker(foodMarker)
    .setLngLat([-98.32306, 29.55873])
    .addTo(map);

// Wingstop Marker Popup

 var wingstopPopup = new mapboxgl.Popup()
     .setText("Welcome To Wingstop")
     .addTo(map)

wingstopMarker.setPopup(wingstopPopup)



wingstopMarker.addEventListener("click", wingstopPopup)
cfaMarker.addEventListener("click", cfaPopup)
roadhouseMarker.addEventListener("click", roadhousePopup)










// geocode("8371 Agora Pkwy, Selma, TX 78154", mapboxToken).then(function(result){
//     console.log(result);
//     map.setCenter(result);
//     map.setZoom(9);
//
//     new mapboxgl.Marker()
//         .setLngLat(result)
//         .addTo(map);
// })
//


