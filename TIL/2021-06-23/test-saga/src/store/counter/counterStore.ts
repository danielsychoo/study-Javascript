import { configureStore } from '@reduxjs/toolkit';
import { counterSaga } from './counterSagas';
import { counterSlice } from './counterSlice';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// 미들웨어
const sagaMiddleware = createSagaMiddleware();

// 스토어
const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: [sagaMiddleware, logger],
});
sagaMiddleware.run(counterSaga);

export default store;

console.log(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
