var currZoom = map.getView().getZoom();
map.on("moveend", function(e) {
  var newZoom = map.getView().getZoom();
  if (currZoom != newZoom) {
    if (newZoom > 19) {
        document.getElementById("vienna").style.display = "none";
    } else {
        document.getElementById("vienna").style.display = "unset";
    }
    currZoom = newZoom;
  }
}); 
