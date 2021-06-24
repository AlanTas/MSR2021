let storedFunction = () => {
    return this.function1().function2();
}

// or without arrow function

let storedFunction = function () {
    return this.function1().function2();
}.bind(this)

