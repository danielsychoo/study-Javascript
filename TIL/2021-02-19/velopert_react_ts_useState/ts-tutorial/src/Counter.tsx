import React, { useReducer } from "react";

// ? 이렇게 액션을 | 으로 연달아서 쭉 나열하세요.
type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

function reducer(state: number, action: Action): number { // state의 타입과 return 타입이 동일해야 한다.
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0); // reducer함수를 사용하고 초기값 0
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
}

export default Counter;