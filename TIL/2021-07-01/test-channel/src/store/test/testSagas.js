import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import socket from '../../config/socket';

const connect = () => {
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

const subscribe = (socket) => {};


// 사가아아아아아아아아아아ㅏ아아아아아아아
function* read(socket) {
  const channel = yield call(subscribe, socket);

  while(true) {
    let action = yield take(channel);
    yield put(action);
  }
};

function* handleIO(socket) {
  yield fork(read, socket);
};

function* flow() {
  while(true) {
    const socket = yield call(connect);
    const location = yield fork(handleIO, socket);
  }
};

function* rootSaga() {
  yield fork(flow);
};

export default rootSaga;