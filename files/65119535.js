// match cluster icon to markers
var calc = function(markers, numStyles) {
    // default to blue
    var highestPriorityColor = 1;
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].getIcon().indexOf("red.png") > -1) {
            // if any markers are red, will be red, can return result
            return {text: markers.length, index: 3}; // index of red
        } else if (markers[i].getIcon().indexOf("yellow.png") > -1) {
            // if any markers are yellow, update it to yellow if it is blue
            if (highestPriorityColor < 2)
                highestPriorityColor = 2; // index of yellow
        } /* else if (markers[i].getIcon().indexOf("green.png") > -1) {
            // ignore green markers (leave it whatever color it is, defaults to blue)
        } */
    }
    // return result once complete processing all the markers
    return {text: markers.length, index: highestPriorityColor}; // index of chosen cluster
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(51, 4),
    zoom: 6,
    mapTypeControlOptions: "roadmap"
  });

  var markers = [];

  // make random red, yellow, blue markers
  for (var i = 0; i < 50; i++) {
    var latLng = new google.maps.LatLng(51.11 - Math.random(), 4.11 - Math.random());
    var marker = new google.maps.Marker({
      position: latLng,
      icon: 'http://maps.google.com/mapfiles/ms/micons/green.png',
      label: "" + i,
      map: map
    });
    markers.push(marker);
  }
  for (var i = 0; i < 20; i++) {
    var latLng = new google.maps.LatLng(51.11 - Math.random(), 4.11 - Math.random());
    var marker = new google.maps.Marker({
      position: latLng,
      icon: 'http://maps.google.com/mapfiles/ms/micons/yellow.png',
      label: "" + i,
      map: map
    });
    markers.push(marker);
  }
  for (var i = 0; i < 5; i++) {
    var latLng = new google.maps.LatLng(51.11 - Math.random(), 4.11 - Math.random());
    var marker = new google.maps.Marker({
      position: latLng,
      icon: 'http://maps.google.com/mapfiles/ms/micons/red.png',
      label: "" + i,
      map: map
    });
    markers.push(marker);
  }

  // match cluster icon to markers
  var calc = function(markers, numStyles) {
    // default to blue
    var highestPriorityColor = 1;
    for (var i = 0; i < markers.length; i++) {
      if (markers[i].getIcon().indexOf("red.png") > -1) {
        // if any markers are red, will be red, can return result
        return {
          text: markers.length,
          index: 3
        }; // index of red
      } else if (markers[i].getIcon().indexOf("yellow.png") > -1) {
        // if any markers are yellow, update it to yellow if it is blue
        if (highestPriorityColor < 2)
          highestPriorityColor = 2; // index of yellow
      }
      /* else if (markers[i].getIcon().indexOf("green.png") > -1) {
                 // ignore green markers (leave it whatever color it is, defaults to blue)
             } */
    }
    // return result once complete processing all the markers
    return {
      text: markers.length,
      index: highestPriorityColor
    }; // index of chosen cluster
  }

  // define cluster icons
  var mcOptions = {
    gridSize: 50,
    maxZoom: 15,
    styles: [{
        height: 50,
        url: "https://raw.githubusercontent.com/googlearchive/js-marker-clusterer/gh-pages/images/m1.png",
        width: 50
      },
      {
        height: 50,
        url: "https://raw.githubusercontent.com/googlearchive/js-marker-clusterer/gh-pages/images/m2.png",
        width: 50
      },
      {
        height: 50,
        url: "https://raw.githubusercontent.com/googlearchive/js-marker-clusterer/gh-pages/images/m3.png",
        width: 50
      }
    ]
  };
  var markerCluster = new MarkerClusterer(map, markers, mcOptions);
  markerCluster.setCalculator(calc);
}
#map {
  height: 80%;
}


/* Optional: Makes the sample page fill the window. */

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}