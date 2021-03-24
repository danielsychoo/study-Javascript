import React, { useState } from 'react';

type MyFormProps = { // 상위 app.tsx에서 받아올 props의 type 정의
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({ // state 만들기
    name: '',
    description: ''
  });

  const { name, description } = form; // state 구조분해할당
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { // 해당내용은 마우스오버
    const { name, value } = e.target; // state와 value
    setForm({
      ...form, // 기존것 가져오고
      [name]: value // value 집어넣고
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // 해당내용은 마우스오버
    e.preventDefault(); // submit 동작 중단
    onSubmit(form); // form state대로 onSubmit
    setForm({ // form state 초기화
      name: '',
      description: ''
    });
  };;

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' value={name} onChange={onChange} />
      <input name='description' value={description} onChange={onChange} />
      <button type='submit'>등록</button>
    </form>
  )
}

export default MyForm;