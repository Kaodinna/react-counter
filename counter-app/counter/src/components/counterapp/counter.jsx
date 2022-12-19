import React, { Component } from "react";
import "./counter.css";
class Counter extends Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="counter">
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge  badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}
export default Counter;
