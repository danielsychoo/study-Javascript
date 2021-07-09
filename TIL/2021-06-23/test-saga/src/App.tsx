import React from 'react';
import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from './store/counter/counterSagas';
import './App.css';

function App({ count, dIncrease, dDecrease }: any) {
  return (
    <div className="App">
      <button onClick={dIncrease}>+</button>
      <div>{count}</div>
      <button onClick={dDecrease}>-</button>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dIncrease: () => dispatch(increaseAsync()),
    dDecrease: () => dispatch(decreaseAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
