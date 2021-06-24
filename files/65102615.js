var stipends = document.getElementById("stipends");
var stack = ["stack1.PNG", "stack2.PNG", "stack3.PNG"];

//currentStack = 0 starts the index at 0
//we will use this to iterate over the array in sequential order starting with the first item
var currentStack = 0;

function nextStack() {
//declare array length as a var 
 var len = stack.length;

//on click, check if currentStack value is less than len
 if(currentStack < len){
 
//console log the item in the stack array that has a matching index
   console.log(stack[currentStack]);

//apply the same output as image source
   stipends.src = stack[currentStack];
   
//continue adding to the currentStack for the next loop until finished
   currentStack++;
 }
}