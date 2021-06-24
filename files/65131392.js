//calculation strategies
class AddStrategy {
  doMaths(a, b) {
    return a + b;
  }
}

class MultiplyByConstantStrategy {
  constructor(x) {
    this.x = x;
  }

  doMaths(a, b) {
    return (a + b) * this.x;
  }
}

//display strategies
class ConsoleDisplayStrategy {
  show(num) {
    console.log(num.toFixed(2))
  }
}

class HTMLDisplayStrategy {
  constructor(elementSelector) {
    this.inputElement = document.querySelector(elementSelector);
  }

  show(num) {
    this.inputElement.value = num;
  }
}

//calculate class
class Calculate {
  constructor(operationHandler, displayHandler) {
    this.operationHandler = operationHandler;
    this.displayHandler = displayHandler;
  }

  calculate(a, b) {
    const result = this.operationHandler.doMaths(a, b);
    this.displayHandler.show(result);
  }
}


/*     usage     */

//calculate the total for a bill + tip
const tip = new Calculate(
  new MultiplyByConstantStrategy(1.15), 
  new HTMLDisplayStrategy("#totalWithTip")
);
document.querySelector("#billTotal")
  .addEventListener("click", () => {
    const coffee = Number(document.querySelector("#coffeePrice").value);
    const bagel = Number(document.querySelector("#bagelPrice").value);
    
    tip.calculate(coffee, bagel);
  });
  
//just display a calculation on the page
const showAdd = new Calculate(
  new AddStrategy(),
  new HTMLDisplayStrategy("#addResult")
);
showAdd.calculate(2, 8);


//print a sum
const printAdd = new Calculate(
  new AddStrategy(),
  new ConsoleDisplayStrategy()
);

document.querySelector("#printSum")
  .addEventListener("click", () => {
    const a = Number(document.querySelector("#a").value);
    const b = Number(document.querySelector("#b").value);
    
    printAdd.calculate(a, b);
  });
<pre>MultiplyByConstantStrategy + HTMLDisplayStrategy</pre>

<div>
  <label for="coffeePrice">Price for coffee:</label>
  <input id="coffeePrice" value="2" type="number" />
</div>
<div>
  <label for="bagelPrice">Price for bagel:</label>
  <input id="bagelPrice" value="8" type="number" />
</div>
<div>
  <label for="totalWithTip">You owe:</label>
  <input id="totalWithTip" readonly/>
</div>
<button id="billTotal">Bill please!</button>

<hr/>

<pre>AddStrategy + HTMLDisplayStrategy</pre>

<div>
  <label for="addResult">2 + 8 = </label>
  <input id="addResult" readonly/>
</div>

<hr/>

<pre>AddStrategy + ConsoleDisplayStrategy</pre>

<div>
  <input id="a" value="2" type="number" />
  +
  <input id="b" value="8" type="number" />
</div>
<button id="printSum">print the sum</button>