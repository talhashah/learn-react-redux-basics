import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/action";
class Counter extends Component {
  //   state = {
  //     counter: 0,
  //   };

  //   counterChangedHandler = (action, value) => {
  //     switch (action) {
  //       case "inc":
  //         this.setState((prevState) => {
  //           return { counter: prevState.counter + 1 };
  //         });
  //         break;
  //       case "dec":
  //         this.setState((prevState) => {
  //           return { counter: prevState.counter - 1 };
  //         });
  //         break;
  //       case "add":
  //         this.setState((prevState) => {
  //           return { counter: prevState.counter + value };
  //         });
  //         break;
  //       case "sub":
  //         this.setState((prevState) => {
  //           return { counter: prevState.counter - value };
  //         });
  //         break;
  //       default:
  //         return this.state;
  //     }
  //   };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAdditionCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Results
        </button>
        <ul>
          {this.props.results.map((result, index) => (
            <li
              onClick={() => this.props.onDeleteResult(index)}
              key={result.id}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAdditionCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
    onStoreResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, payload: result }),
    onDeleteResult: (index) =>
      dispatch({ type: actionTypes.DELETE_RESULT, resultElIndex: index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
