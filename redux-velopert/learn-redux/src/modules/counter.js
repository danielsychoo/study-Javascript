// Ducks 방식으로 작성할 경우 이름이 혼동되지 않도록
// Action type 선언시 아래의 'counter' 과 같이 구분을 지어준다.
// ? Action type 선언
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action 생성함수는 export로 만들어준다. (export default가 아님)
// ? Action 생성함수
export const setDIFF = diff => ({ type: SET_DIFF, diff }); // increase 및 decrease시 몇씩 증가 및 감소할지 정할 수 있게 diff로
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// ? 초기상태 선언
const initialState = {
  number: 0,
  diff: 1 // 여기에서 diff를 설정.
};

// Reducer는 export default로 만들어준다.
// Reducer는 보통 module 이름으로 작성한다.
// ? Reducer
export default function counter(state = initialState, action) { // 이경우에도 초기 state를 지정해줘야 undefined를 막을 수 있다.
  switch(action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      }
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      }
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      }
    default:
      return state;
  };
};