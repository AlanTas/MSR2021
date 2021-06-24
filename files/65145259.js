const snippets = [{
    id: 1,
    title: "Loop through an array",
    tags: ["array", "map", "foreach"]
},
{
    id: 2,
    title: "Loop through another array",
    tags: ["foo", "bar", "ham"]
}
];

ReactDOM.render(
  <div>
    {snippets.map(snippet => (
        <p key={snippet.id}>
          <div>
            <strong>{snippet.title}</strong>
          </div>
          
          {snippet.tags.map(tag => (
            <button>{tag}</button>
          ))}
        </p>
      ))}
  </div>,
  document.getElementById('root')
);