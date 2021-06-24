const minX = (arr) => {
  let recordMin = 0;
  let sum = 0;
  for (const elm of arr) {
    sum += elm;
    recordMin = Math.min(recordMin, sum);
  }
  return -recordMin + 1;
};

console.log(minX([-2, 3, 1, -5]));
console.log(minX([-2, 3, 1, -5, 999]));