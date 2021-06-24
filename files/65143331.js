var testATT = getATT('#graph3','data-gpget');
var testData = getData('#graph3','gpget');
console.log(typeof testATT, testATT);
console.log(typeof testData, testData);

function getData(id,value) {
   return $(id).data(value);
}
function getATT(id,value) {
   return $(id).attr(value);
}