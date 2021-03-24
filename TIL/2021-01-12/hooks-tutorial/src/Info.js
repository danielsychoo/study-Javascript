// useEffect는 react component가 rendering될 때 마다
// 특정 작업을 수행하도록 설정할 수 있는 Hook
// componentDidMount와 componentDidUpdate를 합친 형태라고 생각해도 무방함
import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickName] = useState('');

  useEffect(() => {
    console.log('effect');
    console.log(name);
    return() => {
      console.log('cleanup');
      console.log(name);
    }
  });

  const onChangeName = event => {
    setName(event.target.value);
  };

  const onChangeNickname = event => {
    setNickName(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          value={name}
          onChange={onChangeName}
        />
        <input
          value={nickname}
          onChange={onChangeNickname}
        />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;



