export default function App() {
  const titleArray = []

  const recursive = (children) => {
    children.map((newChild) => {
      newChild.title && titleArray.push(newChild.title)
      if(newChild.children) {
        recursive(newChild.children)
      }
    })
  }
  recursive(parent.children)
  return (
    <div className="App">
      {titleArray.map((title, index) => (
         <div key={index}>{title}</div>
      ))}
    </div>
  );
}
