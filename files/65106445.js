function filterFunction() {
  let isInputAvail = false;
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toLowerCase();
  if (filter.length > 0) {
    document.getElementById("myDropdown").classList.add("show");
  } else {
    document.getElementById("myDropdown").classList.remove("show");
  }
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].innerText;
    filter = filter.replace(/\s/g, '')
    txtValue = txtValue.replace(/\s/g, '')
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      isInputAvail = true;
      a[i].style.display = "block";
    } else {
      a[i].style.display = "none";
    }
  }
  if (!isInputAvail) {
    document.getElementById("noMatches").classList.add('show');
  } else {
    document.getElementById("noMatches").classList.remove('show');
  }
}
body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

.s01 {
  min-height: 100vh;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  background: url("../images/Search_001.png");
  background-size: cover;
  background-position: center center;
  padding: 15px;
}

.div {
  display: none;
  background-color: #0000D6;
}

.dropbtn {
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

input {
  background: url("images/search/searchicon.png") top left no-repeat;
  padding-left: 25px;
}

#myInput {
  box-sizing: border-box;
  background-position: 14px 12px;
  background-repeat: no-repeat;
  color: #000000;
  font-size: 18px;
  font-family: Tahoma, Geneva, sans-serif;
  padding: 14px 20px 12px 45px;
  border: 3px solid #000000;
  border-radius: 10px;
  background-color: #C4C6C3;
}

#myInput:focus {
  outline: none;
  border-color: #171313;
  background-color: #FFFFFF;
  border: 5px solid #000000;
  color: #000000;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  max-height: 215px;
  display: none;
  position: absolute; 
  width:100%;
  background-color: #A3A3A3;
  min-width: 230px;
  overflow-y: scroll;
  border: none;
  z-index: 1;
  border-radius: 10px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}
<div class="s01">

  <div class="dropdown">
    <input type="text" class="dropbtn" placeholder="Search Here..." id="myInput" onInput="filterFunction()">
    <div id="myDropdown" class="dropdown-content">
      <a href="" target="_parent">Search 1</a>
      <a href="" target="_parent">Search 2</a>
      <a href="" target="_parent">Search 3</a>
      <a href="" target="_parent">Search 1</a>
      <a href="" target="_parent">Search 1</a>
      <a href="" target="_parent">Search 5</a>
      <a href="" target="_parent">Search 5</a>
      <a href="" target="_parent">Search 5</a>
    </div>
    <div id="noMatches" class="dropdown-content">
      <a href="" target="_parent"><b>No Matches?</b> Perform custom search</a>
    </div>
  </div>
</div>