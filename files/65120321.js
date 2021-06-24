const arr = [
    { description: 'H', order: 1 },
    { description: 'K', order: 2 },
    { description: 'K', order: 3 },
    { description: 'H', order: 4 },
    { description: 'e', order: 5 },
    { description: 'l', order: 6 },
    { description: 'l', order: 7 },
    { description: 'o', order: 8 },
    { description: 'e', order: 9 },
    { description: 'l', order: 10 }
];

const key = 'Hello';

// result array
const result = [];

// current index of the test
let index = 0;

for (let e of arr) {
    // if matches the test, add the element to the result array and increse the index
    if (e.description === key[index]) {
        result.push(e);
        index++;
        
        // if already found the result, stop the iteration
        if (index >= key.length) break;
    } else {  // if failed the test, clear the index and the result
        index = 0;
        result.length = 0;
    }
}

console.log(result);