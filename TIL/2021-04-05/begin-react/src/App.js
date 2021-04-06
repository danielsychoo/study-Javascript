import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 추후 배열에 추가하는 부분

    // id가 3까지 있으므로 4, 5, 6 으로 계속 증가하도록
    // 이때 current는 23번째 줄의 initialValue
    nextId.current++ ;
  }
  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;
