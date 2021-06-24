function myFunction(target, icon) { // create a function that accepts arguments
  const element = document.getElementById(target) // query whatever element you pass to it.
  if (element.getAttribute('type') === 'password') {
    element.setAttribute('type', 'text');
    icon.classList.add('fa-eye-slash');
    icon.classList.remove('fa-eye');
  } else {
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
    element.setAttribute('type', 'password');
  }
}

icon.addEventListener('click', () => myFunction('pass', icon)); // add the event listeners wrapped in anonymous function so it's not called immediately
icon2.addEventListener('click', () => myFunction('repeat_pass', icon2));
