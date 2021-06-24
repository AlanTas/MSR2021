function checkUser() {
  // userField.setAttribute('class', 'user');
  let userText = userField.value.substring(0, userField.value.length);
  let expr = userText.match(regEx);
  if (expr && userText.length > 0) {
    userField.setAttribute('class', 'user test');
  } else {
    userField.setAttribute('class', 'user');
  }
}
