let output = [];
let shipperName = null;
for (let ii = 0; ii < input.length; ii++) {
  let val = input[ii];
  if (val["Shipper_Name"] !== shipperName) {
    shipperName = val["Shipper_Name"];
    output.push({Shipper_Name: shipperName});
  }
  let copy = JSON.parse(JSON.stringify(val));
  delete copy["Shipper_Name"];
  output.push(copy);
}

console.log(output);
