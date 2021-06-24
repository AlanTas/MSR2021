var countDate = new Date("Jan 01, 2021 00:00:00").getTime();

function newYear() {
  var now = new Date().getTime();
  gap = countDate - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(gap / day);
  var h = Math.floor((gap % day) / hour);
  var m = Math.floor((gap % hour) / minute);
  var s = Math.floor((gap % minute) / second);

  var dayDivs = document.querySelectorAll(".day");
  var hourDivs = document.querySelectorAll(".hour");
  var minuteDivs = document.querySelectorAll(".minute");
  var secondDivs = document.querySelectorAll(".second");

  for (let i = 0; i < dayDivs.length; i++) {
    dayDivs[i].innerText = d;
    hourDivs[i].innerText = h;
    minuteDivs[i].innerText = m;
    secondDivs[i].innerText = s;
  }
}

setInterval(function() {
  newYear();
}, 1000);
.countdown {
  display: flex;
  justify-content: center;
}

.countdown .separator {
  font-weight: 400;
}

.countdown div {
  position: relative;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #45deb0;
  margin: 0 -15px;
  font-size: 3em;
  font-weight: 500;
}

.countdown div:before {
  content: attr(data-time);
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 35px;
  color: #45deb0;
  font-size: 0.35em;
  line-height: 35px;
  font-weight: 300;
}
<div class="countdown">
  <div class="day" data-time="Dagen">na</div>
  <div class="separator"><span>:</span></div>
  <div class="hour" data-time="Uren">na</div>
  <div class="separator"><span>:</span></div>
  <div class="minute" data-time="Uren">na</div>
  <div class="separator"><span>:</span></div>
  <div class="second" data-time="Seconden">na</div>
</div>


<p>How can I make the second countdown widget(the one in bottom) work with same codes?</p>

<div class="countdown">
  <div class="day" data-time="Day">na</div>
  <div class="separator"><span>:</span></div>
  <div class="hour" data-time="Hour">na</div>
  <div class="separator"><span>:</span></div>
  <div class="minute" data-time="Minute">na</div>
  <div class="separator"><span>:</span></div>
  <div class="second" data-time="Second">na</div>
</div>