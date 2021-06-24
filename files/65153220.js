// DOM (Document Object Model) fully Loaded and parsed
window.addEventListener('DOMContentLoaded', (event) => {
// Changed Peach to PeachPuff & aliceblue to AliceBlue to match HTML Color codes. Note that the AliceBlue might not be fully visible to distinguish between it and the whit background colour
var colour = ['blue', 'green', 'yellow', 'purple', 'PeachPuff', 
            'pink', 'orange', 'magenta', 'black', 'AliceBlue'];

var divContainer = document.getElementById('container');
// Used query selectorAll to return array of nodes with class name. And the . before the class name
var divS = document.querySelectorAll('.innerDiv');

for (let i = 0; i < divS.length; i++)
{
    console.log(divS[i]);
    divS[i].addEventListener('mouseover', function() {
        this.style.background = colour[i];

        
    });
    divS[i].addEventListener('mouseout', function() {
        this.style.background = "white";
    });
}
});
