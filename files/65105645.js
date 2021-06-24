const email = document.getElementById('email');
const label =  document.getElementById('lblemail');

email.addEventListener('input', function(e) {
  if (!e.target.value.trim()) {
    email.style.border = 'solid 1px red';
    label.style.visibility = 'visible';
  } else {
    email.style.border = 'solid 1px black';
    label.style.visibility = 'hidden';
  }
})
