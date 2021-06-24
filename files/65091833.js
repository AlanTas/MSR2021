const EL_body = document.querySelector("body");
const ELS_fontSize = document.querySelectorAll(".fontSize");
localStorage.fontSize = localStorage.fontSize || 16; // Read or default to 16px

function changeSize() {
  EL_body.style.fontSize = `${localStorage.fontSize}px`;
}

ELS_fontSize.forEach(el => el.addEventListener("click", function() {
  localStorage.fontSize = parseInt(localStorage.fontSize) + parseInt(el.value);
  changeSize();
}));

// Change size on subsequent page load
changeSize();
const EL_body = document.querySelector("body");
const ELS_fontSize = document.querySelectorAll("[name='fontSize']");
localStorage.fontSize = localStorage.fontSize || 16; // Read or default to 16px

function changeSize() {
  ELS_fontSize.forEach(el => el.checked = el.value === localStorage.fontSize);
  EL_body.style.fontSize = `${localStorage.fontSize}px`;
}

ELS_fontSize.forEach(el => el.addEventListener("change", function() {
  localStorage.fontSize = el.value;
  changeSize();
}));

// Change size on subsequent page load
changeSize();

const EL_body = document.querySelector("body");
const EL_fontSize = document.querySelector("#fontSize");
localStorage.fontSize = localStorage.fontSize || 16; // Read or default to 16px

function changeSize() {
  EL_fontSize.value = localStorage.fontSize; // Update select value;
  EL_body .style.fontSize = `${localStorage.fontSize}px`;
}

EL_fontSize .addEventListener("change", function() {
  localStorage.fontSize = this.value;
  changeSize();
});

// Change size on subsequent page load
changeSize(); 
