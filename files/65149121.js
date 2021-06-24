let number = 100
 
function change(number) {
    //This is the variable scoped to the function
    number = number * 10;
}
//This is the variable defined in the global scope
change(number);
 
console.log(number);
