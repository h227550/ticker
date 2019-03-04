import React, { Component } from "react";

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickValue: 0
    };
  }
  increment = () => {
    this.setState({
      tickValue: this.state.tickValue + 1
    });
  };
  decrement = () => {
    this.setState({
      tickValue: this.state.tickValue - 1
    });
  };
  reset = () => {
    this.setState({
      tickValue: 0
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>Count: {this.state.tickValue}</div>
        <p>
          <button onClick={this.reset}>Reset</button>
        </p>
      </div>
    );
  }
}

export default Ticker;
