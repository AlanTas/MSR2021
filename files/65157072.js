var locationsCoordinates = [{lat: 12.84, lng: 122.89}, {lat: 12.80, lng: 122.93}, {lat: 12.74, lng: 122.85}];

var markers = [];

for (let i = 0; i < locationsCoordinates.length; i++) {
    var marker = new google.maps.Marker({
        position: locationsCoordinates[i],
        map
    });
    
    google.maps.event.addListenerOnce(marker, "click", () => {
        console.log("marker", i, "clicked");
    });
    
    markers.push(marker);
}

google.maps.event.addListener(map, 'zoom_changed', function() {
    let zoom = map.getZoom();
    if (zoom < 12) {
        for (let i = 0; i < markers.length; i++) {
            markers[i].setVisible(false);
        }
    } else {
        for (let i = 0; i < markers.length; i++) {
            markers[i].setVisible(true);
        }
    }
})
