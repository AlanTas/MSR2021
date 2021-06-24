function startFunction() {
  let az = document.getElementsByTagName("input")[0].getAttribute("value");

  let elements = document.getElementsByTagName("a");
  let element;
  for (let a = elements.length - 1; a >= 0; a--) {
    element = elements[a];
    if (!element.innerHTML.startsWith(az)) {
      element.remove();
    }
  }

}

startFunction();
<input type="text" name="search" value="A" class="searchbox">
<div class="media-body">
  <div class="media-heading">
    <a href="#">A doc beginning with A</a>
  </div>
</div>

<div class="media-body">
  <div class="media-heading">
    <a href="#">Doc beginning with D</a>
  </div>

  <div class="media-body">
    <div class="media-heading">
      <a href="#">Something completely different</a>
    </div>
  </div>