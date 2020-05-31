//Global variable declarations
var map, heatmap;
var user = { name: "user", location: {lat: 0, lng: 0}};

// Suppose this is the application database data of users online, or something like that.
// Probably the best scenario would be drawing only what is at user screen to avoid server overloading with multiple cross operations between users requesting data and sending their location.
var dbl = {
    client: {location: user.location}
};

// Testing purposes - database overflow with random ordered users
// Should be execute only once per runtime, as it does not detect multiple "same-name" users - tho it generates random numbers - very unlikely to repeat any.
async function objOverflow(database, value){
    await sleep(2000);
    var newUser = {};
    for (i = 1; i < value; i++) {
        
        var newUserName = "user" + i
        newUser = {};
        newUser[newUserName] = {location: {lat: randomizeCoords(user.location.lat), lng: randomizeCoords(user.location.lng)}};
                
        var assign = Object.assign(database, newUser);
    }
}

// Function called by the method getCurrrentPosition which stores user location inside this global variable - not sure if it is the best way to work with this kind of data.
function extract(position) {
    user.location.lat = position.coords.latitude;
    user.location.lng = position.coords.longitude;
}

// Geolocation parsing
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(extract);
        // console.log("Geolocation parsed.");
        // console.log("user.location.Lat: " + user.location.lat +" Lng: " +user.location.lng);
        // This line below makes sure we have a global location object to be used within the program with client updates and movement tracking - again, not sure if it is the ideal way to manage this kind of data.
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    setTimeout(getLocation, 5000);
}

// Give a little spread to coordinates - for emulation and testing
function randomizeCoords(value) {
    var rand = Math.random();
    var luck = Math.random();

    if (luck > 0.50) {
        value += rand / 75;
    } else {
        value -= rand / 75;
    }
    return parseFloat(value.toFixed(7));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function initMap() {
    getLocation();
    objOverflow(dbl, 2500);

    await sleep(4000);

    var icons = {
        client: {
            url: './headicon.png',
            scaledSize: new google.maps.Size(45, 45)
        },
        cluster: {
            url: './testicon2.png',
            scaledSize: new google.maps.Size(50,50)
        }
    };

    var styledMapLight = new google.maps.StyledMapType(
        [
            {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
                {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
                },
                {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
                },
                {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
                },
                {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
                },
                {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
                },
                {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
                },
                {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
                },
                {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
                },
                {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
                },
                {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
                },
                {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
                },
                {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
                },
                {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
                },
                {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
                },
                {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
                },
                {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
                },
                {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
                },
                {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
                },
                {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
                },
                {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
                },
                {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
                }
        ],
        {name: 'Light'});

    var styledMapDark = new google.maps.StyledMapType(
        [
            {
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#242f3e"
                }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#746855"
                }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#242f3e"
                }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#d59563"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#d59563"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#263c3f"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#6b9a76"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#38414e"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#212a37"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#9ca5b3"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#746855"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#1f2835"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#f3d19c"
                }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#2f3948"
                }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#d59563"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#234a56"
                },
                {
                    "saturation": 10
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#515c6d"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#17263c"
                }
                ]
            }
            ],
            {name: 'Dark '});      

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: user.location,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'styled_light', 'styled_dark']
        }
    });

    // Sets styled_map 
    map.mapTypes.set('styled_light', styledMapLight);
    map.mapTypes.set('styled_dark', styledMapDark);
    map.setMapTypeId('styled_dark');

    // Transforms Local Database object into an array containing location objects without usernames
    //let tempArr = Object.values(dbl);
    //let locationArr = Object.values(tempArr);   
    
    // Shops examples
    var locat = [];
    for (const users in dbl) {
        console.log("Disposing marker for user: "+ users);
        var add = locat.push({lat: dbl[users].location.lat, lng: dbl[users].location.lng});
        //console.log (locat);
    }
    locat.splice(0, 1);
    
    var markers = locat.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            icon : "testicon2.png"            
        })
    })
        
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'node_modules/@google/markerclustererplus/images/m'});
    

    var marker = new google.maps.Marker({
        position: user.location,
        map: map,
        title: 'This is you!',
        icon: icons.client
    });
}


function createMarker(position, map){
    var zoom = map.getZoom();
}
// Geo measure function - returns the distance between two coordinates
// Haversine formula
function hav(lat1, lon1, lat2, lon2){  
    var R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d * 1000; // Returns the distance in Meters
}