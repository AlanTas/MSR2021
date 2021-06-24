var hobbies = ["Sample 1", "Sample 2", "Sample 3"];

function log(){
  const elem = document.getElementById("demo");
  const startStr = "I only like";

  hobbies.forEach((hobby,i) => {
    setTimeout(() => {
      elem.innerHTML = `<p>${startStr} ${hobby}</p>`
    }, i * 3000);
  })
}

var hobbies = ["Sample 1", "Sample 2", "Sample 3"];

function loop(delayTime) {
  const elem = document.getElementById("demo");
  const startStr = "I only like";
  hobbies.forEach((hobby,i) => {
    setTimeout(() => {
      elem.innerHTML = `<p>${startStr} ${hobby}</p>`
    }, i * delayTime);
  })
}

function log(){
  const delayTime = 3000;
  loop(delayTime)
  setInterval(function() {
    loop(delayTime)
  }, hobbies.length * delayTime);
}
