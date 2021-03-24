// ! 일반적으로 module에 선언하는 flow
/* 
 * 1. Action type 선언 (UpperCase, snake_case)
 * ex) const INCREASE = 'counter/INCREASE';
 * 
 * 2. Action 생성함수 (lowerCase, camelCase, 앞에는 export)
 * ex) export const increase = () => ({ type: INCREASE });
 * 
 * 3. 초기상태 선언
 * ex) const initialState = {
 *       number: 0
 *     }
 * 
 * 4. Reducer (Action과 달리 앞에는 export default)
 * (보통 reducer는 module의 이름으로 만든다.)
 * (parameter에 stae = initialState 를 넣어주어야 최초에 undefined를 방지할 수 있다.)
 * (마지막에 default를 return state로 꼭 넣어주어야 한다.)
 * ex) export default function counter (state = initialState, action) {
 *       switch(action.type) {
 *         case INCREASE:
 *           return {
 *             ...state,
 *             number: state.number + 1
 *           }
 *       }
 *      default:
 *        return state;
 *     }
 */ 

// ? Action type 선언
const ADD_TODO = 'todos/ADD_TODO'; // 할일 항목을 추가하는 action
const TOGGLE_TODO = 'todos/TOGGLE_TODO'; // 할일 항목을 체크하는 action

// ? Action 생성 함수
let nextId = 1; // id를 사용하기 위해 선언
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
      id: nextId++, // id 사용
      text
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

// ? 초기상태 선언
const initialState = [
  /* 빈 배열로 선언하지만 이 배열안에 어떻게 값을 넣어 줄 것인지 봅시다.
  {
    id: 1,
    text: '예시',
    done: false or true
  }
  */
];

// ? reducer
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(
        todo => todo.id === action.id
          ? { ...todo, done: !todo.done }
          : todo
      );
    default:
      return state;
  }
};
