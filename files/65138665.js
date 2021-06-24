let button = document.getElementById('submitButton');
button.addEventListener('click', evenOrOdd);

function evenOrOdd () {
    //Declare the input inside the function and use .value to get the value and Number() to convert the string to number.
    let input = Number(document.getElementById('textInput').value);
    let result;
    
    //Change the condition
    if (input % 2 == 0) {
        result = "even";//Change to strings, not variables
    } else {
        result = "odd";
    }
    document.getElementById('para').textContent = input + " is an " + result + "number.";
}