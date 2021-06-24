const divs = document.querySelectorAll( 'div' );

divs.forEach(div => div.addEventListener( 'scroll', e => {
  
  divs.forEach(d => {
  
    d.scrollTop = div.scrollTop;
    d.scrollLeft = div.scrollLeft;
  
  });
  
}) );
html, body {

  height: 100%;
  
}
body {

  display: flex;
  padding: 0;
  margin: 0;

}
div {

  width: 50%;
  height: 100%;
  overflow: scroll;

}
span {

  width: 200vw;
  height: 300vh;
  display: block;
  background: linear-gradient(90deg, transparent, yellow), linear-gradient( 0deg, red, blue, green );
  
}
#div2 {

  margin-top: 30px;
  
}
const divs = document.querySelectorAll( 'div' );

divs.forEach(div => div.addEventListener( 'scroll', e => {
  
  const offsetTop = div.scrollTop / (div.scrollHeight - div.clientHeight);
  
  const offsetLeft = div.scrollLeft / (div.scrollWidth - div.clientWidth);
  
  divs.forEach(d => {
  
    d.scrollTop = offsetTop * (d.scrollHeight - d.clientHeight);
    d.scrollLeft = offsetLeft * (d.scrollWidth - d.clientWidth);
    
  });
  
}) );
html, body {

  height: 100%;
  
}
body {

  display: flex;
  padding: 0;
  margin: 0;

}
div {

  width: 50%;
  height: 100%;
  overflow: scroll;

}
span {

  width: 200vw;
  height: 300vh;
  display: block;
  background: linear-gradient(90deg, transparent, yellow), linear-gradient( 0deg, red, blue, green );
  
}
#div2 span {
  
  height: 500vh;
  width: 500vw;
  
}