interface IPerson {
  id?: string; // ID is optional (use of ? operator)
  name: string; // Name is Required
  age: number;
}

const persons: Array<IPerson> = [
  { name: "John", age: 12 },
  { name: "Ben", age: 20 }
];

// Both are same: Array<IPerson> === IPerson[]
const fun = (info: Array<IPerson>) => {
  //You will get intellisense here
  console.log(info[0].name);
};

interface IPerson {
  id?: string; // ID is optional (use of ? operator)
  name: string; // Name is Required
  age: number;
}

const persons: Array<Partial<IPerson>> = [
  { name: "John" }, // You can do it.
  { name: "Ben", age: 20 }
];

// Both are same: Array<IPerson> === IPerson[]
const fun = (info: Partial<IPerson>[]) => {
  //You will get intellisense here
  console.log(info[0].name);
};

const is_valid_person = (person: any): Boolean => {
  return (
    typeof person === "object" &&
    typeof person.name === "string" &&
    typeof person.age === "number" &&
    person.name.length >= 5 &&
    person.age >= 1
  );
};

console.log("Is person valid: ", is_valid_person({}));
console.log("Is person valid: ", is_valid_person("Invalid Person"));
