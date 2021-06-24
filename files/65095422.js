var canvas = document.getElementById("ok");
var ctx = canvas.getContext("2d");
var loggingMachine = document.getElementById("loggy");
var score = 0;
const Rg = Math.floor(Math.random() * 480);
function ball(x) {
  this.x = x;
  this.y = 0;
  this.width = 20;
  this.height = 20;
}
var firstBall = new ball(Rg);
function newBall() {
  if (firstBall.y < 480) {
    ctx.clearRect(0, 0, 480, 480);
    ctx.fillRect(firstBall.x, firstBall.y, firstBall.width, firstBall.height);
    firstBall.y++;
  } else {
  
  const playerStart = player.x;
  const playerEnd = player.x + player.width;
  
  const ballStart = firstBall.x;
  const ballEnd = firstBall.x + firstBall.width;
  
  const test1 = ballEnd - playerStart;
  const test2 = ballStart - playerEnd;
  
    if (
      test1 >= 0 && test2 <= 0
    ) {
      alert("yawwo");
    }
    firstBall.y = 0;
    firstBall.x = Math.floor(Math.random() * 480);
  }
}
function paddle(x) {
  this.x = x;
  this.y = 470;
  this.width = 70;
  this.height = 20;
}

var player = new paddle(50);
function renderPlayer() {
  ctx.fillRect(player.x, player.y, player.width, player.height);
  document.addEventListener("keydown", logKey);

  function logKey(e) {
    if (e.code === "ArrowLeft") {
      player.x = player.x - 0.01;
    } else if (e.code === "ArrowRight") {
      player.x = player.x + 0.01;
    }
    loggingMachine.innerText = score;
  }
}

function tick() {
  newBall(Rg);
  renderPlayer();
  setTimeout(tick, 5);
}
tick();