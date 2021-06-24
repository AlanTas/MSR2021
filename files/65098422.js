function change(elem, data) {
  let counter = 0;
  setInterval(function() {
    elem.innerHTML = data[counter];
    counter++;
    if (counter >= data.length) {
      counter = 0;
    }
  }, 1000);
}

change(document.getElementById("n1"), ["2.0%", "1.7%", "1.9%", "1.8%", "1.9%"]);
change(document.getElementById("n2"), ["12.0%", "2.7%", "3.9%", "4.8%", "5.9%"]);