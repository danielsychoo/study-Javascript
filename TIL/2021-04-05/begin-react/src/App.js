import React, { useState, useRef, useMemo, useCallback } from 'react';

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

  const onChange = useCallback(
    e => {
        // 각 e.target을 unique하게 사용하기 위해
        // 물론 이것도 destructuring
        const { name, value } = e.target;
        setInputs(inputs => ({
          ...inputs,
          [name]: value,
        }));
      },
      []
  );

  // initial user data
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    }
  ]);

  // id를 useRef로 관리 initialValue는 4
  const nextId = useRef(4);
  const onCreate = useCallback(
    () => {
      // setState에 바로 넣으면 복잡하니께 따로 객체로
      const user = {
        id: nextId.current,
        username,
        email
      }
      // concat 이용하여 함수형으로
      setUsers(users => users.concat(user));
      // onClick 후 input value를 공백으로 만드는 부분
      setInputs({
        username: '',
        email: '',
      });
  
      // id를 계속 ++ 되게 해줌
      // map으로 돌릴때 unique key이용해야 하니께
      nextId.current++ ;
    },
    [username, email]
  );

  // parameter로 받은 id의 user를 제외한 user만 filtering하는
  // 방식이 얕은 복사로 setState하는 것과 같다.
  const onRemove = useCallback(
    id => {
      setUsers(users => users.filter(user => user.id !== id));
    }, []
  );

  // map으로 돌면서 click된 id가 동일한 것만 active 반전
  const onToggle = useCallback(
    id => {
      setUsers( users =>
        users.map(user =>
          user.id === id
            ? {
                ...user,
                active: !user.active,
              }
            : user
        )
      );
    }, []
  );

  // 활성 사용자를 세는 함수
  const countActiveUsers = users => {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
  };

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성사용자 수 : { count }</div>
    </>
  );
}

export default React.memo(App);