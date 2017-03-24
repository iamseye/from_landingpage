      	
function initMap() {

    var location = new google.maps.LatLng(50.0875726, 14.4189987);

    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: location,
        zoom: 16,
        panControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    map.set("styles", [{
            "featureType": "landscape.man_made",
            "stylers": [{
                "visibility": "on"
            }]
        },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#faf9f7"},{"visibility": "on"}]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [{ "color": "#e0dfe1"},{"visibility": "on"}]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "labels.text",
                "stylers": [{"visibility": "on"}]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#838383"}]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#ffffff" }]
            },
            {
                "featureType": "poi.business",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#def2d0"},{"visibility": "on"}]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#f4e9e5"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#f4e9e5"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "transit",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#58595b"},{"visibility": "off"}]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [ {"color": "#58595b"},{"visibility": "on"}]
            },
            {
                "featureType": "transit.station.bus",
                "elementType": "labels.icon",
                "stylers": [{"saturation": -100},{"lightness": 40},{"visibility": "off"}]
            },
            {
                "featureType": "water",
                "stylers": [{"color": "#e8f6f7"}]
            }]
    );

}