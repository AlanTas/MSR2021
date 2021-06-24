let placea = 'Shopping Mall'
let placeb = 'Library'

let people = ['John', 'Sam', 'Ryan', 'Liam', 'David'];
let person = people[Math.floor(Math.random() * people.length)];

if (person === 'John' || person === 'Liam' || person === 'Sam') {
  console.log(`Lets go to the ${placea}`)
} else {
  console.log(`I love quiet places, lets go to the ${placeb}`)
}