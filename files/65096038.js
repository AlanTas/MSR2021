const minInterval = 5000;       // 5 seconds (for example)
let lastResult = null;          // Last result provided
let nextAvailable = Date.now(); // When the next can be provided
function onceEvery() {
    const now = Date.now();
    if (now < nextAvailable) {
        return lastResult;
    }
    lastResult = /*...calculate result...*/;
    nextAvailable = now + minInterval;
    return lastResult;
}

const minInterval = 5000;       // 5 seconds (for example)
let lastResult = null;          // Last result provided
let nextAvailable = Date.now(); // When the next can be provided
function onceEvery() {
    const now = Date.now();
    if (now < nextAvailable) {
        console.log(Date.now(), "Too soon, returning last value:", lastResult);
        return lastResult;
    }
    lastResult = (lastResult || 0) + 1;
    nextAvailable = now + minInterval;
    console.log(Date.now(), "Calculated new value:", lastResult);
    return lastResult;
}

// Call it every second or so
setInterval(onceEvery, 1000);