import React from 'react';
import { useDispatch } from 'react-redux';
import { getLocation } from './store/test/testSlice';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      헬로오오오오오우워어어어얼드
      <button onClick={dispatch(getLocation())}>소켓연결버튼!!!</button>
    </div>
  );
}

export default App;
