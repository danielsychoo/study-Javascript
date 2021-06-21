import React from 'react';
import { useInput } from '../hooks';

const Home = () => {
  const { text, onChange } = useInput();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(text);
  };

  return (
    <div className="Home">
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
};

export default Home;
