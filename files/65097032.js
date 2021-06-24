
$(".create").click(function(){
  let element = `
      <div id="card" class="card col- 3" style="width:18rem;style="margin-right=3%; margin-right=3%"><img src="..." class="card-img-top" alt="..." id="image"+String(cnt)><div class="card-body"><h5 class="card-title" id="title" contentEditable="true">Card title</h5><p class="card-text" id="desc" contentEditable="true">Some quick example text to build on the card title and make up the                     bulk of the'                    card\'s content.</p><a href="#" class="btn btn-primary" id="button"+ String(cnt) >Go somewhere</a><a href="#" class="close" onclick='deleteCard(this)'>Delete</a></div></div>`;
  document.getElementById("lastRow").innerHTML+=element;
});

function deleteCard(delBtn){
  delBtn.parentNode.parentNode.hidden = true
}

