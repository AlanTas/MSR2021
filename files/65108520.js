var tdTag = document.querySelectorAll("#tab tr td");

for(var i = 0; i < tdTag.length; i++){
  tdTag[i].addEventListener('click', clickedFunction);
}

function clickedFunction(){
  if(!this.classList.contains('clicked')){
      this.classList.add('clicked');
      this.style.background = "red";
  }
}


