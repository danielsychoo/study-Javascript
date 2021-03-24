import { createStore } from 'redux';

// ! 만드는과정------------------------------------------//

// state의 초기값 정의
const initialState = {
  counter: 0,
  text: '',
  list: []
};

// Action type 정의 (type은 UpperCase, snake_case)
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// Action 생성함수 (함수는 UnderCase, camelCase)
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

// 아래의 Action 생성함수의 경우에는
// 받아온 text, item을 그대로 객체에 넣어줌
const changeText = text => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item,
});

// Reducer
// 아래에서 state = initialState 를 하는 이유는
// 초기값 지정을 안하면 default return시 state가 undefined이기 때문
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state, // 기존 state를 rest parameter로 불러오고
        counter: state.counter + 1, // 변화될 값만 설정
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text, // action 함수에서 불러온 인자는 'action.' 으로 접근
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item) // 배열은 push를 사용하면 안됨 concat, Object.assign 등으로
      }
    default:
      return state;
  };
};

// Store 만들기
// createStore를 하는데 reducer을 넣어줌
const store = createStore(reducer);

// ! 다만듬------------------------------------------//

// store.getState()는 store안의 현재 state를 조회하는 것
// console.log(store.getState());

// ! 구독하고 dispatch 해보는 과정시작---------------------//

const listener = () => {
  const state = store.getState(); // state 변수에 store안의 현재 state를 담음
  console.log(state);
}

// 
const unsubscribe = store.subscribe(listener);
// unsubscribe(); // subscribe를 해지하고 싶을 때 실행시켜주면 됨

// ? ------------ dispatch 해보는 과정 -----------------//
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id: 1, text: '와우'}));

window.store = store; // 이렇게하면 콘솔에서 찍어볼 수 있음
window.unsubscribe = unsubscribe; // 이 역시 콘솔에서 사용 가능

// ! 구독하고 dispatch 해보는 과정 끝----------------------//
