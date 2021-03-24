import React, { useState } from "react";
import "./style.css";

// ? Hook을 이용해 functional로 React를 이용하는 것이
// ? Class형으로 사용하는 것 보다 훨씬 간결하다.

const useInput = () => {

}

const App = () => {
  // useState는 array로 되어있어야 한다.
  // 이때, item과 같은 이름은 마음대로 지정이 가능하다.
  // item을 state로, setItem으로 setState, initialState는 1
  const [item, setItem] = useState(1);
  // 아래와 같이 함수의 방식으로 setState를 하는 함수를 만든다.
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

export default App;
