function initialize() {
    let mapOptions = {
        // Zoom of map on start
        zoom: 10,
        // Initial center coordinates on start (Jakarta, Indonesia)
        center: new google.maps.LatLng(-6.19285963071817, 106.82057076277371),
        // Type of map (ROADMAP, SATELLITE, HYBRID, TERRAIN)
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Minimum zoom of map
        minZoom: 2
    }

    // Create a new map instance using provided options
    let map = new google.maps.Map(document.querySelector('#map'), mapOptions)

    // Create an info window to display location info
    let infoWindow = new google.maps.InfoWindow()

    // Create a marker for example: My Sweet Home
    let marker = new google.maps.Marker({
        // Coordinates for My Sweet Home
        position: new google.maps.LatLng(-7.473990495015087, 110.66822218989526),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'My Sweet Home'
    })

    // Add click event listener for marker
    google.maps.event.addListener(marker, 'click', () => {
        infoWindow.setContent(marker.title)
        infoWindow.open(map, marker)
    })

    // Adjust map center when the window is resized
    google.maps.event.addDomListener(window, 'resize', () => {
        map.setCenter(mapOptions.center)
    })
}

// Initialize the map when window loading finishes
google.maps.event.addDomListener(window, 'load', initialize)
