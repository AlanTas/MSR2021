var graphs = [
  {
    graph: {
      name: "Praveen Kumar",
      age: 27,
      space: "YouTube"
    }
  }, {
    graph: {
      name: "Cat Techie",
      age: 25,
      gender: "Female"
    }
  }
];
console.log(graphs.map(item => {
  return `The value of ${item.graph.name}'s values are:
` + Object.keys(item.graph).map(key => {
    return `- ${key}: ${item.graph[key]}`;
  }).join("\n");
}));