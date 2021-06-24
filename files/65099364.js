function minX(integers) {
  let sum = 0;
  let min = 0;
  for (const integer of integers) {
    sum += integer;
    if (sum < min) min = sum;
  }
  return 1 - min;
}

console.log(minX([-2,3,1,5]));
console.log(minX([3,-2,-4,7]));