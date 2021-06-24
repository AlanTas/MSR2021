const data = [
  {
    code: "prod1",
    quantity: 13,
    pricePerItem: 10,
    totalCost: 130
  },
  {
    code: "prod1",
    quantity: 7,
    pricePerItem: 11,
    totalCost: 77
  },
  {
    code: "prod2",
    quantity: 10,
    pricePerItem: 9,
    totalCost: 90
  },
  {
    code: "prod2",
    quantity: 9,
    pricePerItem: 10,
    totalCost: 90
  }
];

console.log(
  data.reduce((acc, current) => {
    if (!acc[current.code]) {
      acc[current.code] = { quantity: 0, total: 0 };
    }
    return {
      ...acc,
      [current.code]: {
        quantity: acc[current.code].quantity + current.quantity,
        total: acc[current.code].total + current.totalCost
      }
    };
  }, {})
);