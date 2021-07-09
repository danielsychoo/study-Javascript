import { eventChannel, buffers } from 'redux-saga';
import socket from '../config/socket';

// 기본 matcher, buffer
const defaultMatchers = () => true;
const defaultBuffer = buffers.none();

// 소켓 이벤트채널 생성 팩토리 함수
export const createSocketChannel = (eventType, buffers = defaultBuffer, matchers = defaultMatchers) => {
  return eventChannel(
    emit => {
      const emitter = (message) => {
        emit(message);
      };

      socket.on(eventType, emitter);

      return () => {
        socket.off(eventType, emitter);
      };
    },
    buffers,
    matchers,
  );
};

export const closeChannel = (channel) => {
  channel && channel.close();
};