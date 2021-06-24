const arr1 = [
  {id: 1, favorite: false}, 
  {id: 2, favorite: false}, 
  {id: 3, favorite: false}
];
const arr2 = [1, 3];

const res = arr1.map(e => 
  ({...e, favorite: arr2.includes(e.id)})
);

console.log(res);