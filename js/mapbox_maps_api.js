"use strict"

mapboxgl.accessToken = mapboxToken;

var mapVisual = {
    container: "map",
    style:'mapbox://styles/mapbox/streets-v11',
    center:[-98.4916, 29.4252],
    zoom:10
};

var map = new mapboxgl.Map(mapVisual);
