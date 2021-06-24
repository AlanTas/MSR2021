var labels = document.querySelectorAll("#uniteLabel"),
unitOutputs = document.querySelectorAll("#uniteOutput");

for (var i=0; i < labels.length; i++) {
  if (labels[i].innerHTML == "En travers") {
    unitOutputs[i].innerHTML = "Stère";
  } else if (labels[i].innerHTML == "A l’unité de produit") {
    unitOutputs[i].innerHTML = "Stère";
  } else if (labels[i].innerHTML == "En bloc") {
    unitOutputs[i].innerHTML = "m3";
  }
}
<div class="post">
  <div id="uniteLabel">En travers</div>
  <div id="uniteOutput"></div>
</div>

<div class="post">
  <div id="uniteLabel">A l’unité de produit</div>
  <div id="uniteOutput"></div>
</div>

<div class="post">
  <div id="uniteLabel">En bloc</div>
  <div id="uniteOutput"></div>
</div>