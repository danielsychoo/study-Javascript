import { createStore } from 'redux';

// 액션 타입
const ADD = 'ADD';
const DELETE = 'DELETE';

// 액션 생성함수
export const addTodo = text => {
  return { type: ADD, text };
};
export const deleteTodo = id => {
  return { type: DELETE, id };
};

// 리듀서
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const newState = [{ id: Date.now(), text: action.text }, ...state];
      return newState;
    case DELETE:
      const deletedState = state.filter(toDo => toDo.id !== action.id);
      return deletedState;
    default:
      return state;
  }
};

// 스토어
const store = createStore(reducer);

export default store;
