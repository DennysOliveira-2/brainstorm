//Global variable declarations
var map, heatmap;
var user = {
    name: "user",
    lat: 0,
    lng: 0,
    location: {lat: 0, lng: 0}
}


// Function calls
getLocation();

// TODO Draw information about localization on-screen

// Geolocation parsing
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(extract);
        console.log("Geolocation parsed.");
        console.log("user.location.Lat: " + user.location.lat +" Lng: " +user.location.lng);
        // This line below makes sure we have a global location object to be used within the program with client updates and movement tracking - again, not sure if it is the ideal way to manage this kind of data.
        updateLocation();
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    setTimeout(getLocation, 5000);
}

// Function called by the method getCurrrentPosition which stores user location inside this global variable - not sure if it is the best way to work with this kind of data.
function extract(position) {
    user.location.lat = position.coords.latitude;
    user.location.lng = position.coords.longitude;
}

// TODO This function is supposed to handle user location packets and send them away to a database where it can be shown at the map to other users.
function updateLocation() {
    // send.to.database(user.name, userLocation);
    console.log("Client location update sent to db.")
}

function receiveLocation() {

}

// TODO Function is meant to be updating the client user interface with the data it receives from the server
function updateView() {
    map.setCenter(user.location);
    setTimeout(updateView, 2000);
    //console.log("View updated");
}


// Map initialization
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: user.location
    });

    let infoWindows = new google.maps.InfoWindow;

    // Suppose this is the application database data of users online, or something like that.
    // Probably the best scenario would be drawing only what is at user screen to avoid server overloading with multiple cross operations between users requesting data and sending their location.
    var dbMarkers = {
        user1: {lat: user.lat, lgn: user.lng},
        user2: {lat: randomizeCoords(user.lat), lgn: randomizeCoords(user.longitude)},

    }
    
}

// Simple function meant to give a little spread to coordinates point - for emulation and testing
function randomizeCoords(value) {
    var rand = Math.random();
    var luck = Math.random();

    if (luck > 0.50) {
        value += rand/100;
    } else {
        value -= rand/100;
    }

    return value;
}