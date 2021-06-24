let position = 0;
let h3d;
function onfilechange(evt) {
    const selFile = evt.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function (e) {
        h3d = new DataView(e.target.result);
        while (position < h3d.byteLength) {
            if (isOpenBracket(h3d.getUint8(position++))) {
                // we are looking to see if we are starting a closing tag
                // don't increment position here - we just want to peek
                if (isSlash(h3d.getUint8(position))) {
                    while (!isCloseBracket(h3d.getUint8(position++))) {
                        // we don't need the closing tag so we will skip over it
                        // just read forward to the closing braket
                        // after this completes the 'position' will be on the byte representing the closing tag
                    }
                    // go back to the outer while loop
                    continue;
                }
                let tag = readTag(h3d, position);
                switch (tag) {
                    case 'PONTOS':
                    case 'POINTS':
                        const points = readPoints();
                    case 'FACES':
                        const faces = readFaces();
                     
                    // add other tags you want to parse

                }
            }
        }
    };
    reader.readAsArrayBuffer(selFile);
}

document.getElementById('file').addEventListener('change', onfilechange);

function readTag() {
    const tag = [];
    // start reading tag
    // read until we find the closing bracket
    // after this completes the 'position' will be on the byte representing the closing tag
    while (!isCloseBracket(val = h3d.getUint8(position++))) {
        tag.push(val);
    }
    return String.fromCodePoint(...tag);
}

function readPoints() {
    const points = {}; // or use a Map
    // do this until we hit the openning bracket of the closing tag
    while (!isOpenBracket(val = h3d.getUint8(position++))) {
    // the points are an upper case letter followed by 3 - 8 byte numbers
    // so if we hit an uppercase letter read the next 3 - 8 byte sequences as numbers
        if (isChar(val)) {
            let arr = [];
            // we need to read these number as LittleEndian because that is how they are in the file
            arr.push(h3d.getFloat64(position, true));
            position += 8;
            arr.push(h3d.getFloat64(position, true));
            position += 8;
            arr.push(h3d.getFloat64(position, true));
            position += 8;

            points[String.fromCodePoint(val)] = arr;
        }
    }
    return points;
}

function readFaces() {
    // don't know what to do here because I don't know what the format of this data is.
}
// these functions check Ascii values - no need to covert them to strings
function isWhitesapce(value) {
    return value === 32 ||
        value === 9 ||
        value === 10 ||
        value === 11 ||
        value === 12 ||
        value === 13
}

function isOpenBracket(value) {
    return value === 60;
}
function isCloseBracket(value) {
    return value === 62;
}
function isSlash(value) {
    return value === 47;
}
function isChar(value) {
// upper case letters
    return value >= 41 && value <= 90;
}
