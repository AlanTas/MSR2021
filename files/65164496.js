import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      web3: "",
      number: 0
    };
    this.getNumber = this.getNumber.bind(this);
  }

  componentDidMount() {
    setInterval(this.getNumber, 10000);
  }

  getNumber() {
    this.setState({ number: this.state.number + 1 });
  }

  render() {
    return (
      <>
        <div>Number: {this.state.number}</div>
        <span>This will update every 10 seconds</span>
      </>
    );
  }
}

export default App;
