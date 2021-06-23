import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../redux/store';

const ToDo = ({ text, id, deleteToDo }) => {
  return (
    <li className="Todo">
      <Link to={`/detail/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>Del</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteToDo: () => dispatch(remove(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
