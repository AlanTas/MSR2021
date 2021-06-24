const data = {
  sample1: {
    4: 2245,
    5: 2175,
    6: 3495,
    7: 1845,
    11.5: 1674,
    12.5: 1649
  },
  sample2: {
    4: 3295,
    5: 3600,
    8: 2625,
    9: 2830,
    11.5: 2879,
    12.5: 3090
  },
  sample3: {
    4: 3295,
    5: 3600,
    6: 2625,
    9: 2830,
    11.5: 2879,
    12.5: 3090
  }
};

const keys = Object.keys(data);

const mergedInnerKeys = Array.from(
  new Set(
    keys
      .reduce((val, key) => [...val, ...Object.keys(data[key])], [])
      .sort((a, b) => a - b)
  )
);

const res = mergedInnerKeys.map((key) => ({
  index: key,
  ...keys.reduce(
    (v, k) => ({
      ...v,
      [k]: data[k][key] !== undefined ? data[k][key].toString() : ''
    }),
    {}
  )
}));
console.log(res);