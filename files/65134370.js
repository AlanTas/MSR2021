let initArray = [];
i=0; // define i
function makeArray() {
  do {
    let val = Math.floor(Math.random() * 9)
    initArray.push(val);
    shiftArray(); //call shiftArray
    console.log(initArray);
    i++;
  }
  while (i < 100) //reduced to prevent computers from screaming
}

function shiftArray() {

if (initArray.length > 5) {
    initArray.shift();
  }
}
makeArray();