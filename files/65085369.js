let animals = ["cat", "tiger", "wolf", "lion", "dog", "elephant", "rat"];

function checkAnimalsOrder(animalsArr, orderStr) {
  // store the current index of the orderedAnimals array
  let ind = 0;
  // make an array from that string format "animal > animal" ...;
  let orderedAnimals = orderStr.split(" < ");
  // filter the animals array to get only the animal that have the same index
  // of the orderedAnimals array element
  return animalsArr.filter(function(animal, index) {
    if(animalsArr[index] === orderedAnimals[ind]) {
      ind++;
      return animal;
    }
  }).join("") === orderedAnimals.join("");
  // finally join the two arrays as a string and check for equality
}

// Testing 
console.log("checking for 'tiger < lion < rat':");
console.log(checkAnimalsOrder(animals, "tiger < lion < rat"));

console.log("checking for 'tiger < dog < rat':");
console.log(checkAnimalsOrder(animals, "tiger < dog < rat"));

console.log("checking for 'tiger < cat < rat':");
console.log(checkAnimalsOrder(animals, "tiger < cat < rat"));

// On the fly
console.log("checking for 'rat < tiger':");
console.log(checkAnimalsOrder(["rat", "elephant", "tiger"], "rat < tiger"));