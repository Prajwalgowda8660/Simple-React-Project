import React from "react";

class LifeCycleDemo extends React.Component {
  constructor(props) {  // Fix the typo here
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("Constructor: Component is being created");
  }

  componentDidMount() {
    console.log("ComponentDidMount: Component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component updated");
    console.log("Previous State:", prevState);
    console.log("Current State:", this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component will unmount");
  }

  incrementCounter = () => {
    this.setState((prevState) => ({  // Fix the arrow function syntax here
      counter: prevState.counter + 1,
    }));
  };

  render() {
    console.log("Render: Component is rendering");
    return (
      <div>
        <h1>React LifeCycleDemo</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment Counter</button>
      </div>
    );
  }
}

export default LifeCycleDemo;
