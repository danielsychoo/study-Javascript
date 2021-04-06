import React, { useState, useRef } from 'react';

import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  // * state 생성
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  // * state destructuring
  const { username, email } = inputs;

  const onChange = e => {
    // 각 e.target을 unique하게 사용하기 위해
    // 물론 이것도 destructuring
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // initial user data
  const [users, setUsers] = useState([
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
  ]);

  // id를 useRef로 관리 initialValue는 4
  const nextId = useRef(4);
  const onCreate = () => {
    // setState에 바로 넣으면 복잡하니께 따로 객체로
    const user = {
      id: nextId.current,
      username,
      email
    }
    // 준비된 user객체 setState 이전 data는 spread
    setUsers([
      ...users,
      user
    ])
    // onClick 후 input value를 공백으로 만드는 부분
    setInputs({
      username: '',
      email: '',
    });

    // id를 계속 ++ 되게 해줌
    // map으로 돌릴때 unique key이용해야 하니께
    nextId.current++ ;
  }

  // parameter로 받은 id의 user를 제외한 user만 filtering하는
  // 방식이 얕은 복사로 setState하는 것과 같다.
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
