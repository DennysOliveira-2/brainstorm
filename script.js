// Neeeds to be dynamic with user data input, not hard-coded
var user = {
    name: "User",
    lat: -23.6192428,
    long: -45.4239186
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: {lat: user.lat, lng: user.long},
    });
}
