export class FileUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Keys: [],
      //values: [],
      modify: { Keys: ["key1", "key2", "key3"], values: [""] }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createUI() {
    const { modify } = this.state;
    const keys = modify.Keys;
    const values = modify.values;
    
    const val = keys.map((item, i) => {
      return values.map((el, i) => {
        return (
          <div key={i}>
            <label>{item}</label>
            <input
              type="text"
              onChange={(event) => this.handleChange(event, i)}
            />
          </div>
        );
      });
    });
    return val;
  }

  handleChange(event, i) {
    const { modify } = this.state;
    let values = [...modify.values];
    values[i] = event.target.value;
    this.setState({ values: values });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.values.join(", "));
    event.preventDefault();
  }

  ModifyList() {
    const { modify } = this.state;
    const keys = modify.Keys;
    const val = keys.map(function (item, i) {
      return (
        <div>
          <label>{item}</label>
          <input type="text" />
        </div>
      );
    });
    return val;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/*this.ModifyList()*/}
          {this.createUI()}
          <input type="submit" className="btn btn-primary" value="Search !" />
          <input type="submit" className="btn btn-primary" value="Edit !" />
        </form>
      </div>
    );
  }
}