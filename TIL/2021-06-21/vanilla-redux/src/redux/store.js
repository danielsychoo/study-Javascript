import { createSlice, configureStore } from '@reduxjs/toolkit';

// 액션 타입 + 액션 생성함수 + 리듀서
const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    remove: (state, action) => {
      return state.filter(toDo => toDo.id !== parseInt(action.payload));
    },
  },
});

const { reducer, actions } = toDos;
export const { add, remove } = actions;

// 스토어
const store = configureStore({ reducer });

export default store;
