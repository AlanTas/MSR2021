let clientData = [{ client: 'Pizza Hutt', food_cost: 400.00, prev_year_food_cost: 450.00, }, { client: 'Pizza World', food_cost: 500.00, prev_year_food_cost: 650.00, }];

const difference = (arr, key) => {
  return arr.map(o => {
    const { ["prev_year_" + key]: prev, ...rest} = o;
    return { ...rest,
       difference: Math.abs(o["prev_year_" + key] - o[key])
    }
  });
}
console.log(difference(clientData, "food_cost"));

clientData = [{ client: 'Pizza Hutt', water_cost: 400.00, prev_year_water_cost: 450.00, }, { client: 'Pizza World', water_cost: 500.00, prev_year_water_cost: 650.00, }];

console.log(difference(clientData, "water_cost"));