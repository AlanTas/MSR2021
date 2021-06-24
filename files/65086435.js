const people = [
  {
    name: "Jim",
    color: "blue",
    gender: "male"
  },
  {
    name: "Susan",
    color: "green",
    gender: "female"
  },
  {
    name: "Sam",
    color: "blue",
    gender: "male"
  },
  {
    name: "Eddie",
    color: "green",
    gender: "male"
  },
  {
    name: "Eva",
    color: "blue",
    gender: "female"
  }
];



const deepNest = (arr, [first, ...rest]) => {
  let output = {};
  if (first) {
    let options = [...arr.reduce((set, val) => set.add(val[first]), new Set())].sort(); // Get the options (Set() is a built in thing to remove duplicates), and the sort them alphabetically
    for (let option of options) {
      let val = arr.filter((val) => val[first] === option); // Get the values that have the same value for the option for the query
      output[option] = deepNest(val, rest); // Recursion
    }
  } else {
    output = arr;
  }
  return output;
}

display(deepNest(people, ["gender", "color"]), ["gender", "color"]);
display(deepNest(people, ["color", "gender"]), ["color", "gender"]);
display(deepNest(people, ["color", "name", "gender"]), ["color", "name", "gender"]);

// My own custom display function, since console.log() makes it look wack
function display(json, query) {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.innerText = `["${query.join("\", \"")}"]`;
  const pre = document.createElement("pre");
  pre.innerText = JSON.stringify(json, null, 2);
  
  div.appendChild(h2);
  div.appendChild(pre);
  
  document.querySelector("body").appendChild(div);
}
html,
body {
  background: whitesmoke;
}

pre {
  color: black;
  background: white;
  border: 2px solid black;
  border-radius: 1rem;
  padding: 1rem;
}