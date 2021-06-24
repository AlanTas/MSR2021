//Declare all the classes - 
let divs = ["div1", "div2", "div3"];

//Initiate a delay for each iteration
let delay = 0;

//Run a loop for each class
for(let i = 0; i<divs.length; i++){
  
  //Get the element
  let div = document.getElementsByClassName(divs[i]);
  
  //Run a loop for element with the class
  //(We only have one div with the classes div1 and div2. So it will run one time for them.
  //We have 5 divs with div3 class. It will run 5 times in that case 
  for(let j = 0; j<div.length; j++){
    
    //Get the individual element and add animation with delay
    //The delay will also ensure that the animation starts only when the previous element has finished the animation
    div[j].style.animation = `fadein 5s ${delay}s forwards` ;
    div[j].classList.add("show");
    
    //Increase delay with every iteration
    delay+=5;
  }
}
div {
  visibility: hidden;
}

.div1 {
  width: 400px;
  height: 500px;
  background-color: yellow;
}
.div2 {
  width: 350px;
  height: 400px;
  background-color: green;
}
.div3 {
  width: 300px;
  height: 50px;
  background-color: grey;
  margin: 10px;
}

.show {
  opacity: 0;
  visibility: visible;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}