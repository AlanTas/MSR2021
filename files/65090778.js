const process = (arr) => {
  const result = [];
  let last = -1;
  for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] === "string" || !(i in arr)) {
      if (last !== -1) {
        result.push([last, i]);
      }
      last = i;
    }
  }

  return result.map(([start, end]) => ({
    month: arr[start],
    days: arr.slice(start + 1, end),
  }));
};

const array = ["January", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, "February", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]

console.log(process(array));