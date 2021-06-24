function processPathLettersIntoArray(source) {
  const result = source.replace(/M/g, ";M").replace(/L/g, ";L").replace(/z/g, ";z").split(';').slice(1);
  return result.map(mapGroup);
}

function gcodeXY(source) {
   const [xVal, yVal] = source.split(",");
   return `X${xVal} Y${yVal}`;
}
let start="X0 Y0"; //another side effect :-(

function mapGroup(grp) {
    let s = grp.split(" ");
    if (s[0]=="M"){
        start = gcodeXY(s[1]);
        last=s[1];
        return "G0 F200 "+start;
    }
    else if (s[0]=="L"){
        start=gcodeXY(s[1]);
        last=s[1];
        return "G1 F100 "+start;
    }
    else if (s[0]=="z"){
        last=s[1];
        return "G1 F100 "+start;
    }
    return grp;
}

function path2gcode() {
  const source = 'M 1,2 L 2,2 L 3,3 z';
  return processPathLettersIntoArray(source);
}
