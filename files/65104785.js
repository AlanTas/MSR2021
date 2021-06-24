var requiredClass = document.getElementsByClassName("tp-cu-po");

// function for mouseover
function titlep(elem) {
  const aVal = document.getElementById('in02').textContent;
  const elemVal = elem.textContent.replace(/[^0-9]/g, '');
  elem.style="font-weight: bold;color: #0064ff;"
  elem.title = Number(aVal) * Number(elemVal);
};

// function for mouseleave
function un_titlep(elem) {
  const aVal = document.getElementById('in02').textContent;
  const elemVal = elem.textContent.replace(/[^0-9]/g, '');
  elem.style="font-weight: unser;color: black;" // set this to whatever you want it to be
  
}

for(var j = 0; j < requiredClass.length; j++){
    // when you mouse over
    requiredClass[j].addEventListener("mouseover", function(){
        titlep(this);
    });
    // when you leave
    requiredClass[j].addEventListener("mouseout", function(){
        un_titlep(this);
    });
}
