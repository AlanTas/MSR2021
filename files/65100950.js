// zoo.js

const empty = _ =>
  new Map
  
const fromString = (s = "") =>
  new Map
    ( s
        .split(", ")
        .map(_ => _.split(" is "))
        .map(([ k, _ ]) => [ k, Number(_) ])
    )
  
const toString = (t = empty()) =>
  Array.from
    ( t.entries()
    , ([ animal, qty ]) => `${animal} is ${qty}` 
    )
    .join(", ")
  
const add = (t = empty(), a = "", q = 0) =>
  t.has(a)
    ? t.set(a, t.get(a) + q)
    : t.set(a, q)

export { add, empty, fromString, toString }

// main.js

import { fromString, add, toString } from "./zoo.js"

const input =
  'Dog is 5, Cat is 7, Rabbit is 2'

const result =
  toString(add(fromString(input), "Dog", 3))
  
console.log(result)

// main.js

import { empty, add, toString } from "./zoo.js"

const z =
  empty()

add(z, "dog", 1)
add(z, "cat", 2)
add(z, "rabbit", 3)
add(z, "mouse", 4)
add(z, "dog", 5)
add(z, "rabbit", 6)
  
console.log(toString(z))

// zoo.js
const empty = _ =>
  new Map
  
const fromString = (s = "") =>
  new Map
    ( s
        .split(", ")
        .map(_ => _.split(" is "))
        .map(([ k, _ ]) => [ k, Number(_) ])
    )
  
const toString = (t = empty()) =>
  Array.from
    ( t.entries()
    , ([ animal, qty ]) => `${animal} is ${qty}` 
    )
    .join(", ")
  
const add = (t = empty(), a = "", q = 0) =>
  t.has(a)
    ? t.set(a, t.get(a) + q)
    : t.set(a, q)

// main.js
const input =
  'Dog is 5, Cat is 7, Rabbit is 2'

const result =
  toString(add(fromString(input), "Dog", 3))
  
console.log(result)