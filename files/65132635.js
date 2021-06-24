let isClauseValid, isCaptchaValid;

function clauseValid(elem) {
  isClauseValid = elem.checked;
  setButton();
}

function captchaValid() {
  isCaptchaValid = true;
  setButton();
}

function setButton() {
  document.getElementById("sendBtn").disabled = !isClauseValid || !isCaptchaValid;
}
