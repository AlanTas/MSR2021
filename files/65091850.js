const handlerIs = ($ele, handler, func) => {
  const events = $._data($ele.get(0), "events");
  func = func.toString();
  return events && 
    events[handler]?.some(ev => ev.handler.toString() === func);
};

const $ele = $("button");

const clicked = () => alert("clicked");

$ele.on("click", clicked)
$ele.on("click", clicked)

if (handlerIs($ele, "click", clicked)) {
  console.log(`click clicked exists on ${$ele.get(0).tagName}`);
}
const hasHandler = ($ele,handler) => Object.keys($._data($ele.get(0), "events"))
  .filter(key => key===handler).length>0;


const $ele = $("button");

$ele.on("click",function() { alert("clicked") }); // define click once

if (!hasHandler($ele,"click")) { // test before trying again
   $ele.on("click",function() { console.log("another click") }); 
}
else console.log(`click already found on ${$ele.get(0).tagName}`)

/* 
Object.entries($._data($ele.get(0), "events"))
  .forEach(ent => console.log(ent[0],ent[1][0].handler))
*/