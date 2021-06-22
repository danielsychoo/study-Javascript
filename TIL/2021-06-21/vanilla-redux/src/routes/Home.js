import React from 'react';
import { connect } from 'react-redux';
import { ToDo } from '../components';
import { useInput } from '../hooks';
import { actionCreators } from '../store/store';

const Home = ({ toDos, addToDo }) => {
  const { text, onChange, onReset } = useInput();

  const onSubmit = event => {
    event.preventDefault();
    addToDo(text);
    onReset();
  };

  return (
    <div className="Home">
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
