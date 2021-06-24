return (
  <div>
    Here's the result :
    <ol>
        {arr.map((value, index) => ( //<--return items
            <li key={index}>{value.title}</li>
        ))}
    </ol>
  </div>
);
