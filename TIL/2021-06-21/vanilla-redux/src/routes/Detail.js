import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actionCreators } from '../store/store';

const Detail = ({ oneToDo, deleteToDo }) => {
  const { push } = useHistory();
  const handleDetailDelete = () => {
    deleteToDo();
    push('/');
  };

  return (
    <div className="Detail">
      <div>{oneToDo?.text}</div>
      <div>{oneToDo?.id}</div>
      <button onClick={handleDetailDelete}>Del</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return {
    oneToDo: state.find(toDo => toDo.id === parseInt(id)),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  console.log(typeof id);

  return {
    deleteToDo: () => dispatch(actionCreators.deleteToDo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
