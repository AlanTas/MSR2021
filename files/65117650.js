let someArray = [
[1,"a",2.3],
[2,"b",7.8],
[3,"c",4.5],
]

// if you want to change the items inside the array

//Array.map

someArray = someArray.map(innerArray =>{
  return innerArray.map(element => {
    //Do any thing to the element lets say that we want to convert all values to strings
    
    return String(element);
  })
})

console.log(someArray);

console.log('##################################');
//if you don't want to change the items inside the arreay you can:
// 1. remove the return statement from the Array.map function above

// 2. use any type of loop for, while loop

for(let i = 0; i < someArray.length; i++){
  for(let j = 0; j < someArray[i].length; j++){
      // Do any thing with the array item lets say you want to print it
      console.log(someArray[i][j]);
      
  }

}