let button = document.getElementById('button');
let text = document.getElementById('text');
let body = document.querySelector('body');
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', colorChange);

function colorChange() {
  let hex = '#';

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * number.length);
    hex += number[index];
  }
  text.textContent = hex;
  body.style.backgroundColor = hex;
}
<!DOCTYPE html>

<html lang="en">

<body>
    <h1 id="text">Background Color</h1>
    <button id="button">Change BG-Color</button>
    <script src="script.js"></script>
</body>

</html>