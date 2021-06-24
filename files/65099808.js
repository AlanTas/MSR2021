setInterval(function() {
  const number = Math.floor((Math.random() * 100) + 1);
  document.getElementById("in02").innerHTML = number
}, 5000);

function titlep(elem) {
  const aVal = document.getElementById('in02').textContent;
  const elemVal = elem.textContent.replace(/[^0-9]/g, '');

  elem.title = Number(aVal) * Number(elemVal);
}
<div style="cursor: pointer">

  <span class="tp-cu-po" onmouseover="titlep(this)">4+  </span><br>
  <span class="tp-cu-po" onmouseover="titlep(this)">3+  </span><br>
  <span class="tp-cu-po" onmouseover="titlep(this)">2+  </span><br>
  <span class="tp-cu-po" onmouseover="titlep(this)">1+  </span><br>



</div><br> A =
<a id="in02"></a>