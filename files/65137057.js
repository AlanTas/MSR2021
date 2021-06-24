var promise = new Promise(async function(resolve, reject) {
  // do a thing, possibly async, then…

  var it = await runSlowAsync(2500); 

  if (it) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke")) 
  }
});

var promise2 = new Promise(async function(resolve, reject) {
  // do a thing, possibly async, then…

  var it = await runSlowAsync(10000);
        
  if (it) {
    resolve("Stuff worked too!");
  }
  else {
    reject(Error("It broke too"));
  }
});

promise.then(() => console.log("I am done 2.5 secs later"))
promise1.then(() => console.log("I am done 5 secs later"))

Promise.all([promise, promise1]).then(() => console.log("All promises resolved"))

// In your console you will see this.

// after 2.5 seconds
// "I am done 2.5 secs later"
// another 2.5 seconds later (after 5 seconds)
// "I am done 5 secs later"
// "All promises resolved"
