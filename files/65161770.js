calckStart();

function calckStart() {
    const items = document.getElementById("items");
    for (var i = 1; i < 3; i++) {
        const inpt = document.createElement("input");
        inpt.setAttribute("type", "text");
        inpt.setAttribute("style", "margin:5px;");
        inpt.setAttribute("id", "y" + i);
        inpt.setAttribute("value", "");
        const newline = document.createElement("br");
        items.appendChild(inpt);
        items.appendChild(newline);
    }

    var button = document.createElement('button');
    button.innerHTML = 'ClickMe'
    items.appendChild(button);

    button.addEventListener('click', calculateVal);
}

function calculateVal() {
    var res = 0;
    for (var i = 1; i < 3; i++) {
        res = res + +document.getElementById('y' + i).value;
    }

    var items = document.getElementById("items");
    var result = document.createElement('div');
    result.innerHTML = res;
    items.appendChild(result);
}
        
calckStart();

function calckStart() {
    const items = document.getElementById("items");
    for (var i = 1; i < 3; i++) {
        const inpt = document.createElement("input");
        inpt.setAttribute("type", "text");
        inpt.setAttribute("style", "margin:5px;");
        // inpt.setAttribute("id", "y" + i);
        inpt.setAttribute("value", "");
        inpt.setAttribute("class", "numbers");  //<-- Set class
        const newline = document.createElement("br");
        items.appendChild(inpt);
        items.appendChild(newline);
    }

    var button = document.createElement('button');
    button.innerHTML = 'ClickMe'
    items.appendChild(button);

    button.addEventListener('click', calculateVal);
}

function calculateVal() {
    var list = document.getElementsByClassName('numbers'); //<-- Get by class
    var res = 0;
    for (var i = 0; i < list.length; i++) {
        res = res + +list[i].value;
    }

    var items = document.getElementById("items");
    var result = document.createElement('div');
    result.innerHTML = res;
    items.appendChild(result);
}