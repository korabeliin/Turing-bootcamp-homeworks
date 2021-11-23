import React from 'react';


export default class SecondComponent extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)

  }

  increment() {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }))
  }

  reset() {
    this.setState(state => ({
      count: 0
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>

        <h1>Current: {this.state.count}</h1>
      </div>
    );
  }
}
