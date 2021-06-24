var arr = [
    {prop: 1},
    {prop: 1},
    {prop: 2},
    {prop: 3},
    {prop: 2}
]

const result = Object.values(arr.reduce((acc, item) => {
 acc[item.prop] = acc[item.prop] || [];
 acc[item.prop].push(item);
 return acc;
}, {}));

console.log(result);