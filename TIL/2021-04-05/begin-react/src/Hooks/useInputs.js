import { useState, useCallback } from 'react';

const useInputs = (initialFrom) => {
  const [form, setFrom] = useState(initialFrom);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({
      ...form,
      [name]: value,
    }));
  }, []);

  const reset = useCallback(() => setForm(initialFrom), [initialFrom])
  ;
  return [form, onChange, reset];
}

export default useInputs;