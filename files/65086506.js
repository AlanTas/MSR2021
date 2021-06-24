function addUSComma(n) {
  const display = n;
  return display.toLocaleString('en-US');
}

function addINComma(n) {
  const display = n;
  return display.toLocaleString('en-IN');
}

console.log(addUSComma(123456789));
console.log(addINComma(123456789));