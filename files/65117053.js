const myenum = {
  "bla": "blub",
  [Symbol("foo")]: "bar",
  [Symbol("roger")]: "roger"
}

const iterableKeys = Object.keys(myenum);
const symbolKeys = Object.getOwnPropertySymbols(myenum);
const keys = [...iterableKeys, ...symbolKeys];

console.log(keys);

const values = keys.map(key => myenum[key]);

console.log(values);
const myenum = {
  "bla": "blub",
  [Symbol("foo")]: "bar",
  [Symbol("roger")]: "roger"
}

const keys = Reflect.ownKeys(myenum);

console.log(keys);

const values = keys.map(key => myenum[key]);

console.log(values);