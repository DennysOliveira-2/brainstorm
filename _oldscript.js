
// Neeeds to be dynamic with user data input, not hard-coded
var user = {
    name: "User",
    lat: 0,
    long: 0
}
var coord = document.getElementById("coord");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(extract);
        console.log("Geolocation activated.")
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    setTimeout(getLocation, 5000);

}

function extract(position) {
    user.lat = position.coords.latitude;
    user.long = position.coords.longitude;
    coord.innerHTML = "Lat: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

getLocation();

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
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
        new google.maps.LatLng(randCoords(user.lat), randCoords(user.long)),
    ]
}

function measure(lat1, lon1, lat2, lon2){  // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d * 1000; // meters
}