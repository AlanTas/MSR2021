const x1 = ['US', 'UK', 'China'];
const y1 = [1, 2, 3];
const name1 = 'CO2';

const x2 = ['US', 'UK', 'China'];
const y2 = [4, 5, 6];
const name2 = 'GHG';

const result = x1.map((country, index) => ({
  country,
  [name1]: y1[index],
  [name2]: y2[index]
}));

console.log(result);