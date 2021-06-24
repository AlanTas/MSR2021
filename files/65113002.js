let storage = [];
let addButton = document.getElementById('add_button');
let findButton = document.getElementById('find_button');
let thingContainer = document.getElementById('thing_container');

addButton.onclick = () => {
  let newElement = document.createElement("li");
  newElement.style.background = "purple";
  newElement.textContent = input.value;
  thingContainer.appendChild(newElement);
  storage.push(newElement);
};

findButton.onclick = () => {
  for (let i = 0; i < storage.length; i++) {
    if (storage[i].textContent.indexOf(find_form.value) >= 0) {
      storage[i].style.display = "block";
    } else {
      storage[i].style.display = "none";
    }
  }
};
<body>

    <div class = "to_do_list">

            <div class = "add"></div>
            <div id = "delete"></div>
                
            <input id = "input" type = "text" name = "">

            <button id = "add_button">Add</button>

            <div class = "find"></div>
            <input id = "find_form" type = "text" placeholder = "Find">
            <button id = "find_button" type = "submit">Start</button>

            <div id= "thing_container"></div>

    </div>
    
</body>