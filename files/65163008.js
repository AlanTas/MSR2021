const targetNode = document.querySelector("body");

const observer = new MutationObserver((mutationList, observer)=> {
  mutationList.forEach( (mutation) => {
   if(mutation.type === 'childList') {
     console.log(mutation.addedNodes);
   }
  })

});
observer.observe(targetNode, {
  childList: true,
});

setTimeout(() => {
  const someElement = document.createElement("div");
  someElement.className = "some-element";
  someElement.textContent = "Some Element";
  document.body.appendChild(someElement);
}, 1000);