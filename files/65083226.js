let money = 0;
let running = false;

// when clicking the button
function onClickButton(time, val) {
  if(running) {
    console.log("Already Growing!");
  } else {
    running = true;
    start(time, val);
  }
}

// timer function
function start(time, val) {
  let bar = document.getElementById('progressBar1');
  bar.value = time;
  time++;
  let sim = setTimeout(() => start(time), 30);
  if (time == 100) {
    bar.value = 0;
    let id = val;
    money++;
    document.getElementById("moneyValue").innerHTML = money;
    clearTimeout(sim);
    running = false;
  }
}