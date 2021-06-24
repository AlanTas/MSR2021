import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: ["Apple", "pear", "plum", "currant", "strawberry"],
      b: ["Amelia", "Oliver", "Sophie", "Alfie", "Jacob"],
      c: ["mercedes", "bmw", "audi", "volkswagen", "hyundai"],
      index: null
    };
  }

  setIndex = i => {
    console.log(i);
    this.setState({
      index: i
    });
    console.log(this.state.index);
  };
  render() {
    return (
      <div>
        {this.state.index !== null && (
          <div>
            <List
              a={this.state.a[this.state.index]}
              b={this.state.b[this.state.index]}
            />
          </div>
        )}
        <div>
          <ul>
            {this.state.a.map((arr, idx) => (
              <li
                onClick={() => {
                  console.log("hi");
                  this.setIndex(idx);
                }}
              >
                {arr}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.a}</li>
          <li>{this.props.b}</li>
        </ul>
      </div>
    );
  }
}
