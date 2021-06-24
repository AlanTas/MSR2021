  constructor(props) {
    ...
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ toggled: !this.state.toggled });
    this.props.onToggle();
  }

  render() {
    ...
    <div>
      <button onClick={this.handleToggle}>Toggle</button>
    </div>
    ...
  }
