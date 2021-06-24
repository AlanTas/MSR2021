function textVerify(item) {

  var word = document.getElementById(($('#questionNumber').text() + 'a'));

  if (item.value.toUpperCase() === $(word).text().toUpperCase()) {
    item.style.color = "green";
    $(item).replaceWith("<div style='color:green;'>" + $(word).text() + "</div>");
    //main()
  } else {
    item.style.color = "black";
  }
}