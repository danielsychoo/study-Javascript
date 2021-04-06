import { useState, useCallback } from 'react';

// initialForm은 App.js에서 실제 사용시 parameter로 받을 것
const useInputs = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({
      ...form,
      [name]: value,
    }));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm])
  ;
  return [form, onChange, reset];
}

export default useInputs;