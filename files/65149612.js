    window.addEventListener('DOMContentLoaded', (event) => {
        
   
      
      document.getElementById("option1").addEventListener("click", toggleOption1);
       toggleOption1();
  });
function toggleOption1() {

  var option1 = document.getElementById("option1");

  // if option1 is checked, run first script
  if (option1.checked === true) {
    console.log("checked");
    // chrome.tabs.executeScript({
    //       file: 'optionEnabled.js'
    //     });
  // otherwise, run script 2
  } else {
    console.log("not checked");
    // chrome.tabs.executeScript({
    //       file: 'optionDisabled.js'
    //     });
    }
}
