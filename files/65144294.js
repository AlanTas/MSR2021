async function opacityToggle(layerName, opacity) { /*
^^^^^ */
    if (!layerName) return;

    var s = 0;
    while (s < 1) {
//  ^^^^^
        s += 0.01
        s = +s.toFixed(2)
        console.log('s', layerName, s, opacity);
        map.setPaintProperty(layerName, 'fill-opacity', s);

        await new Promise(resolve => {
//      ^^^^^
            requestAnimationFrame(resolve);
//          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        });
    }
}

function opacityToggle(layerName, opacity) {
    if (!layerName) return Promise.resolve();

    var s = 0;
    return animate();

    function animate() {
        if (s < 1) {
            s += 0.01
            s = +s.toFixed(2)
            console.log('s', layerName, s, opacity);
            map.setPaintProperty(layerName, 'fill-opacity', s);
            return new Promise(resolve => {
//          ^^^^^^
                requestAnimationFrame(resolve);
            }).then(animate);
//            ^^^^^^^^^^^^^^
        } else {
            return Promise.resolve();
        }
    }
}
