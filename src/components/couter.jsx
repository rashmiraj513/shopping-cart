import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { value, id } = this.props.counter;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{value}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2">Increment
        </button>
        <button onClick={() => this.props.onDelete(id)} className="btn btn-danger btn-sm">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

}

export default Counter;