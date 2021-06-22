import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

// 액션 타입 + 액션 생성함수
const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

export const actionCreators = {
  addToDo,
  deleteToDo,
};

// 리듀서
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ id: Date.now(), text: action.payload });
  },
  [deleteToDo]: (state, action) => {
    return state.filter(toDo => toDo.id !== parseInt(action.payload));
  },
});

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       const newState = [{ id: Date.now(), text: action.payload }, ...state];
//       return newState;
//     case deleteToDo.type:
//       const deletedState = state.filter(
//         toDo => toDo.id !== parseInt(action.payload),
//       );
//       return deletedState;
//     default:
//       return state;
//   }
// };

// 스토어
const store = createStore(reducer);

export default store;
