import React, { useState, useRef } from 'react';

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  })

  const nameInput = useRef();

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  // * destructuring
  const { name, nickname } = inputs;


  // ? 1. 각각의 State를 string으로 유지하면 코드가 길어지므로
  // ?    객체화시켜 객체 하나에 캡슐화
  // ? 2. input의 attribute에 name을 추가하여 하나의 onChange 함수를 이용해도
  // ?    각각의 input에 unique하게 적용되도록 함

  return (
    <>
      <input name='name' placeholder='이름' onChange={onChange} value={name} ref={nameInput} />
      <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </>
  )
}

export default InputSample;