const colors = ["#fb5050", "#f74f4f", "#f34e4e", "#ef4d4d", "#ec4b4b", "#e84a4a", "#e44949", "#e04848", "#dc4646", "#d94545", "#d54444", "#d14343", "#cd4141", "#c94040", "#c63f3f", "#c23e3e", "#be3c3c", "#ba3b3b", "#b63a3a", "#b23838"];

const values = [0.020565500406834823, 0.0006918573709419904, 0.03614457831325302, 0.014884840151254727, 0.9638554216867471, 0.005208333333333333, 0.0006248326341158618, 0.14285714285714285, 0.004872900466547537, 0.8571428571428577, 0, 0.2142857142857144, 0, 0.2499999999999991, 0.5000000004656613, 0.45534591194968543, 0.6349489795918367, 0.25, 0.15218156916454706, 0];

// keep track of the old index and sort by value
const valueMap = values.map((val, i) => ({oldIndex: i, value: val})).sort((a,b) => a.value - b.value);

// add the appropriate color to each element of the sorted array
valueMap.forEach((val, i) => val.color = colors[i]);
//check this console.log to verify it sorted/assigned properly
//console.log(JSON.stringify(valueMap));

// resort it by oldIndex
valueMap.sort((a,b) => a.oldIndex - b.oldIndex);

// get just the array of colors
const newColors = valueMap.map(val => val.color);
console.log(newColors);