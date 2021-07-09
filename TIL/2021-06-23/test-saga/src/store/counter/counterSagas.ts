import { createAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { increaseData, decreaseData } from './counterSlice';

export const increaseAsync = createAction('increaseAsync');
export const decreaseAsync = createAction('decreaseAsync');

// 사가
const increaseSaga = function* (action: any) {
  yield delay(1000); // 1초 딜레이
  yield put(increaseData(action.payload)); // increase() 디스패치
};

const decreaseSaga = function* () {
  yield delay(1000); // 1초 딜레이
  yield put(decreaseData()); // decrease() 디스패치
};

export function* counterSaga() {
  yield takeEvery(increaseAsync.type, increaseSaga);
  yield takeLatest(decreaseAsync.type, decreaseSaga);
}
