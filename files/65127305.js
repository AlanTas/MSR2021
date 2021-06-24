// how does it look this way?
console.log(document.querySelector(`#foo > option[value^='#P1']`));
// aha!
console.log(document.querySelector(`#foo > option[value='#P1\\\\"']`));
// jQuery too?
console.log($(`#foo > option[value='#P1\\\\"']`)[0]);
// how about value="\☺"?
console.log(document.querySelector(`#foo > option[value='\\\\☺']`));

// fun use
document.body.appendChild( Object.assign( document.createElement("div"), {
    style: "font-size:4rem; top:-15px;position:absolute;left:5rem;",
    innerHTML: document.querySelector(`#foo > option[value='\\\\☺']`).value.slice(1), 
  } )
);