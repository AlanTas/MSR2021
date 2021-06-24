function styleFunction(feature) {
  var iconUrl = feature.get('iconUrl');
  var defaultStyle = new ol.style.Style({
    fill: new ol.style.Fill({
    color: "green"
  }),
  stroke: new ol.style.Stroke({
   color: "green",
   width: 1.2
  }),
  image: iconUrl ? new ol.style.Icon({
   scale: 0.1,
   src: iconUrl
  }) : undefined
 });
 return [defaultStyle];
}
