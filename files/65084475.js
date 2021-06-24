function changeStyle() {
  const elem = document.getElementById("elem");
  const logs = document.getElementById("logs");
  elem.style.backgroundColor = "red";
  elem.style.borderRadius = "30px";

  elem.ontransitionend = (e) => {
    if (e.propertyName === "border-bottom-right-radius") {
      logs.insertAdjacentText("beforeend", "transition ended");
    }
  }
}