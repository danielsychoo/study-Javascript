import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useInput } from '../hooks';
import { writeChat } from '../utils/apollo/mutation';

const Input = () => {
  // 이름설정
  const [writer, setWriter] = useState('');
  useEffect(() => {
    const user = prompt('이름을 입력하세요.');
    setWriter(user);
  }, []);

  // 메세지 작성
  const { description, onChange, onReset } = useInput('');
  const [onMutation] = useMutation(writeChat, {
    variables: {
      writer,
      description,
    },
  });

  // 뮤테이션 발동!!!
  const handleMutation = () => {
    onMutation();
    onReset();
  };

  // 엔터 키 핸들러
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleMutation();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="내용을 입력하세요."
        onChange={onChange}
        onKeyPress={handleEnter}
      />
      <button onClick={handleMutation}>보내기</button>
    </div>
  );
};

export default Input;
