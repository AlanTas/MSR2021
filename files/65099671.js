function add() {
  var input1 = parseInt(document.getElementById("t1").value);
  var input2 = parseInt(document.getElementById("t2").value);
  var result = input1 + input2;
  document.getElementById('add-result').textContent = result;
}

function divide() {
  var input1 = parseInt(document.getElementById("t3").value);
  var input2 = parseInt(document.getElementById("t4").value);
  var result = Math.floor(input1 / input2);
  var remainder = input1 % input2
  document.getElementById('divide-result').textContent = result;
  document.getElementById('divide-remainder').textContent = remainder;
}

function multiply() {
  var input1 = parseInt(document.getElementById("t5").value);
  var input2 = parseInt(document.getElementById("t6").value);
  var result = input1 * input2;
  document.getElementById('multiply-result').textContent = result;
}

function subtract() {
  var input1 = parseInt(document.getElementById("t7").value);
  var input2 = parseInt(document.getElementById("t8").value);
  var result = input1 - input2;
  document.getElementById('subtract-result').textContent = result;
}
<div>
  <h1>Addition</h1>
  <input type="text" id="t1" name="t1"> +
  <input type="text" id="t2" name="t2">
  <input type="button" id="add" value="=" onClick="add();">
  <span id="add-result"></span>
</div>
<div>
  <h1>Subtraction</h1>
  <input type="text" id="t7" name="t7"> -
  <input type="text" id="t8" name="t8">
  <input type="button" id="subtract" value="=" onClick="subtract();">
  <span id="subtract-result"></span>
</div>
<div>
  <h1>Multiplication</h1>
  <input type="text" id="t5" name="t5"> *
  <input type="text" id="t6" name="t6">
  <input type="button" id="multiply" value="=" onClick="multiply();">
  <span id="multiply-result"></span>
</div>
<div>
  <h1>Division</h1>
  <input type="text" id="t3" name="t3"> ÷
  <input type="text" id="t4" name="t4">
  <input type="button" id="divide" value="=" onClick="divide();">
  <span id="divide-result"></span> | 
  <span id="divide-remainder"></span>
</div>
function add() {
  var input1 = parseInt(document.getElementById("t1").value);
  var input2 = parseInt(document.getElementById("t2").value);
  var result = input1 + input2;
  document.getElementById('add-result').innerHTML = `<i style="color: blue">${result}</i>`;
}

function divide() {
  var input1 = parseInt(document.getElementById("t3").value);
  var input2 = parseInt(document.getElementById("t4").value);
  var result = Math.floor(input1 / input2);
  var remainder = input1 % input2
  document.getElementById('divide-result').innerHTML = `<i style="color: blue">${result}</i>`;
  document.getElementById('divide-remainder').innerHTML = `<i style="color: blue">${remainder}</i>`;
}

function multiply() {
  var input1 = parseInt(document.getElementById("t5").value);
  var input2 = parseInt(document.getElementById("t6").value);
  var result = input1 * input2;
  document.getElementById('multiply-result').innerHTML = `<i style="color: blue">${result}</i>`;
}

function subtract() {
  var input1 = parseInt(document.getElementById("t7").value);
  var input2 = parseInt(document.getElementById("t8").value);
  var result = input1 - input2;
  document.getElementById('subtract-result').innerHTML = `<i style="color: blue">${result}</i>`;
}
<div>
  <h1>Addition</h1>
  <input type="text" id="t1" name="t1"> +
  <input type="text" id="t2" name="t2">
  <input type="button" id="add" value="=" onClick="add();">
  <span id="add-result"></span>
</div>
<div>
  <h1>Subtraction</h1>
  <input type="text" id="t7" name="t7"> -
  <input type="text" id="t8" name="t8">
  <input type="button" id="subtract" value="=" onClick="subtract();">
  <span id="subtract-result"></span>
</div>
<div>
  <h1>Multiplication</h1>
  <input type="text" id="t5" name="t5"> *
  <input type="text" id="t6" name="t6">
  <input type="button" id="multiply" value="=" onClick="multiply();">
  <span id="multiply-result"></span>
</div>
<div>
  <h1>Division</h1>
  <input type="text" id="t3" name="t3"> ÷
  <input type="text" id="t4" name="t4">
  <input type="button" id="divide" value="=" onClick="divide();">
  <span id="divide-result"></span> |
  <span id="divide-remainder"></span>
</div>