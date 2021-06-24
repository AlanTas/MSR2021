const personInterface = {
  name: "string",
  age: "number",
};

const persons = [
  {
    name: "bob",
    age: 18,
  },
  {
    name: "karen",
    age: "50",
  }
];

for(const person of persons) {
  for(const [key, value] of Object.entries(personInterface)) {
    if(typeof person?.[key] === value) {
      console.log(`${person[key]} matches ${value}`);
    } else {
      console.log(`${person[key]} does not match ${value}`);
    }
  }
}