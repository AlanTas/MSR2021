const resolveIcon = (a) => {
    if (a[6] === 3) {
        return a[11];
    }
    return a[12];
}

var marker = L.marker(new L.LatLng(a[9], a[8]), {
   title: title,
   icon: resolveIcon(a),
});
