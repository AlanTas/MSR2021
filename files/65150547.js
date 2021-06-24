{
  data.map(graph => (
    <div key={graph.ID} className="tables">
      <table>
        <tr>
        {
          Object.keys(graph)
            .map(key => <th key={key}>{key}</th>)
        }
        </tr>
        <tr>
        {
          Object.entries(graph)
            .map(([key, val]) => <th key={key}>{val}</th>)
        }
        </tr>
      </table>
    </div>
  ))
}
