import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import reducer from './test/testSlice';
import saga from './test/testSagas';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(saga);

export default store;
