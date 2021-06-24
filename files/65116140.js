var arr = [ { "value": "1", "hobbies": 'netflix'},{ "value": "1", "hobbies": 'food'} ];

var k = {};
var out = [];
arr.forEach(elm => {
  if(typeof(k[elm.value]) == "undefined")
    k[elm.value] = {value:elm.value, hobbies:[]};
  k[elm.value].hobbies.push(elm.hobbies);
});

Object.keys(k).forEach(key => out.push(k[key]));

console.log(out);