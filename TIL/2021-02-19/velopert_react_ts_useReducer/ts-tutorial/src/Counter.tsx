import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  // ? null 일 수도 있고, 아닐 수도 있을 때
  // type Information = { name: string; description: string };
  // const [info, setInformation] = useState<Information | null>(null);
  // ? 상태의 타입이 까다로운 구조를 가진 객체이거나 배열일 때
  // type Todo = { id: number; text: string; done: boolean };
  // const [todos, setTodos] = useState<Todo[]>([]);

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