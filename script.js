// Neeeds to be dynamic with user data input, not hard-coded
var user = {
    name: "User",
    lat: -23.6192428,
    long: -45.4239186
}

var map, heatmap;



//Map initializing
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: {lat: user.lat, lng: user.long},
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map
    });
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map)
}


//Heatmap data - simulation of a database with connected users and their positions updated every few seconds.



function randCoords(value) {
    var rand = Math.random();
    var luck = Math.random();

    if (luck > 0.50) {
        value += rand/100;
    } else {
        value -= rand/100;
    }

    return value;
}


function getPoints() {
    return [ 
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6192428), randCoords(-45.4239186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6592428), randCoords(-45.4339186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
        new google.maps.LatLng(randCoords(-23.6692428), randCoords(-45.4439186)),
    ]
}