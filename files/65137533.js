function addListenersToLinks() {
  const navLinks = document.querySelectorAll('a.nav-link');
  
  Array.from(navLinks).forEach(navLink => {
    navLink.addEventListener('click', event => {
      document.querySelector('#menu-checkbox').checked = false;
    })
  })  
}

document.body.onload = addListenersToLinks();  

function addListenersToLinks() {
  const navLinks = document.querySelectorAll('a.nav-link');
  
  Array.from(navLinks).forEach(navLink => {
    navLink.addEventListener('click', event => {
      document.querySelector('#menu-checkbox').checked = false;
    })
  })  
}

document.body.onload = addListenersToLinks();  
*, *:before, *:after {
  box-sizing: border-box;
}
body {
  font-family: "Verdana", serif;
  font-size: 1.2em;
  overflow-x: hidden;
}
label .menu {
  position: fixed;
  right:-45px;
  top: -45px;
  z-index: 100;
  width: 120px;
  height: 120px;
  background: #F7CC26;
  border-radius:50%;
  transition: 0.5s ease-in-out;
  box-shadow: 0 0 0 0 #072C7D, 0 0 0 0 #072C7D;
  cursor: pointer;
}

label .ha {
  position: absolute;
  top: 75px;
  left: 24px;
  width: 30px;
  height: 2.5px;
  background: #fff;
  display: block;
  transform-origin: center;
  transition: 0.5s ease-in-out;
}
label .ha:after, label .ha:before {
  transition: 0.4s ease-in-out;
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background: #9CBEE3;
}
label .ha:before {
  top: -10px;
}
label .ha:after {
  bottom: -10px;
}
label input {
  display: none;
}
label input:checked + .menu {
  box-shadow: 0 0 0 100vw #F7CC26, 0 0 0 100vh #F7CC26;
  border-radius: 0;
}
label input:checked + .menu .ha {
  transform: rotate(45deg);
}
label input:checked + .menu .ha:after {
  transform: rotate(90deg);
  bottom: 0;
}
label input:checked + .menu .ha:before {
  transform: rotate(90deg);
  top: 0;
}
label input:checked + .menu + ul {
  opacity: 1;
}
label input:checked + .menu2 + ul{opacity:0}

label ul {
  z-index: 200;
  list-style-type: none;
  position: fixed;
  text-align:center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.25s 0s ease-in-out;
}
label a {
  margin-bottom: 1em;
  display: block;
  color: #9CBEE3;
  text-decoration: none;
}
<label>
<input id="menu-checkbox" type="checkbox"></input>
<span class="menu">
<span class="ha"></span>
</span>
<ul>
<li><a class="nav-link" href="#intro">Intro</a></li>
<li><a class="nav-link" href="#educ">About</a></li>
<li><a class="nav-link" href="#free">Free Samples</a></li>
<li><a class="nav-link" href="#video">Video Review</a></li>
<li><a class="nav-link" href="#books">Other Books</a></li>
<li><a class="nav-link" href="#contact">Contact Us</a></li>
</ul>
</label>

<div id="free">Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively. Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively. Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively.</div>
<br>
<div id="video">Wikis, chat messages, or formal documentation for knowledge management aren’t effective. Our question and answer format is a proven approach for accessing the right information in less time.</div><br>
<div id="intro">Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively. Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively. Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively.</div>
<br>
<div id="educ">Wikis, chat messages, or formal documentation for knowledge management aren’t effective. Our question and answer format is a proven approach for accessing the right information in less time.</div><br>
<div id="books">Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively. Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively. Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively.</div>
<br>
<div id="contact">Wikis, chat messages, or formal documentation for knowledge management aren’t effective. Our question and answer format is a proven approach for accessing the right information in less time.</div>