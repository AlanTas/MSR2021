<body>
<div id="root"></div>
</body>
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F', 'G'],
  D: [],
  E: [],
  F: [],
  G: [],
  
 }
 
 const root = document.getElementById("root"); 
 
 const findchildren = (node) => graph[node]
 
 const drawNode = (node) => {
    const input = document.createElement("input"); 
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", node);
  root.appendChild(input); 
  const children = findchildren(node)
  if (children.length > 0) {
    children.forEach(item => drawNode(item))    
  }
 }
 
 drawNode("A")
