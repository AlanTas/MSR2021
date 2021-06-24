const carts = [
  {
    name: 'Voucher A',
    participants: [
      {
        date: 1
      },
      {
        date: 2
      }
    ]
  }
];

const groupedByNames = {};
for (const { name, participants } of carts) {
  if (!groupedByNames[name]) groupedByNames[name] = {};
  for (const { date } of participants) {
    groupedByNames[name][date] = (groupedByNames[name][date] || 0) + 1;
  }
}
const output = Object.entries(groupedByNames).flatMap(
  ([name, dateCounts]) => Object.entries(dateCounts).map(
    ([date, count]) => ({ name, date: Number(date), count })
  )
);
console.log(output);