class App extends Component {
  state = {
    data: [{ id: 1, type: "A" }, { id: 1, type: "B" }, { id: 1, type: "C" }]
  };
  handleChange = e => {
    console.log(e.target.value);
  };
  render() {
    return (
      <div>
        <select className="form-control" onChange={this.handleChange}>
          <option>Select data</option>
          {this.state.data.map((i, h) => (
            <option key={h} value={i.type}>
              {i.type}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
