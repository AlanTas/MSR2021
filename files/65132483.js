var examGrade;
var letter;
function start(){
    var NUMBER_OF_STUDENTS = 20;
    for(var i = 0; i < NUMBER_OF_STUDENTS; i++){

        var examGrade = getRandomInt(50,100); // 2. This is how you generate random numbers (see function getRandomInt)
        var letter = getLetterGrade(examGrade);
        document.writeln("you received " + letter + " for your grade of " + examGrade + "<br>"); // 3. Use "document.writeln" to write lines in browser

    }
}

/* Copied from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// 4. You need to return the letter from the function
function getLetterGrade(examGrade){ // 5. You need to catch the value sent to the function here
    if (examGrade >= 91 && examGrade >= 100){ // 6. You need to use the parameter "examGrade" (not "n")
       return "A";

    }else if (examGrade >= 81 && examGrade >= 90){
      return "A";

    }else if (examGrade >= 71 && examGrade >= 80){
       return "C";

    }else if (examGrade >= 61 && examGrade >= 70){
     return "D";

    }else if (examGrade <61){ 
       return "F";
    }

}

start() // 1. Need to run the function "start"