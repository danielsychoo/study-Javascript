# 1) 액션 타입 정의

리덕스 프로젝트에서 상태에 변화를 일으키는 것은 하나의 액션으로 본다.
액션타입을 정의하는 것은 바로 이 액션에 대한 이름을 정해주는 과정이다.
컨벤션상 액션타입이름은 대문자로 작성되며 고유해야 한다.

```javascript
// 액션 타입 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
```

# 2) 액션 생성 함수 정의

액션 객체를 만드는 함수를 액션 생성 함수라고 한다.
액션 객체는 type 값을 필수로 가지고 있어야 하고 나머지 값은 선택적으로 가질 수 있다.

```javascript
// 액션 생성함수 정의
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increment = diff => ({ type: INCREMENT, diff });
const decrement = () => ({ type: DECREMENT });
```

# 3) 초기값 설정

```javascript
// 초기값 설정
const initialState = {
  light: false,
  counter: 0
}
```

# 4) 리듀서 함수 정의

리듀서는 파라미터로 state와 action을 받아와 새로운 상태를 리턴하는 함수이다.

```javascript
// 리듀서 함수 정의
function reducer(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 기존의 값은 그대로 두면서
        light: !state.light // light 값 반전시키기
      };
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.diff
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      // 지원하지 않는 액션의 경우 상태 유지
      return state;
  }
}
```

# 5) 스토어 만들기

스토어를 만들때는 createStore 함수를 사용하며, 파라미터는 리듀서 함수를 전달해준다.

```javascript
// 스토어 만들기
import { createStore } from 'redux';

const store = createStore(reducer);
```

## 이상의 1~5의 과정을 통해 리덕스쪽 관련 코드의 준비는 모두 끝이 난다.
## 다음부터의 과정은 준비된 리덕스를 사용하는 과정이다.

# 6) render 함수 구현하기

리덕스의 render 함수는 리액트의 render와는 다르게, JSX를 작성하는 것이 아니라 단순히 현재의 상태값에 따라 우리가 이전에 가져온 DOM 레퍼런스의 속성을 설정만 할 것이다.

```javascript
// render 함수 만들기

스토어의 현재 상태를 가져올때는 스토어의 내장함수 getState를 사용한다.

const render = () => {
  const state = store.getState(); // 현재 상태를 가져옵니다.
  const { light, counter } = state; // 디스트럭쳐링
  if (light) {
    lightDiv.style.background = 'green';
    switchButton.innerText = '끄기';
  } else {
    lightDiv.style.background = 'gray';
    switchButton.innerText = '켜기';
  }
  counterHeadings.innerText = counter;
};

render();
```

# 7) 구독 (subscribe) 하기

스토어를 구독해줌으로서 스토어의 상태가 바뀔 때마다 render함수가 호출되도록 할 수 있다. 구독을 할 때에는 스토어의 내장함수 subscribe를 사용한다.

react-redux를 사용할 때에는 라이브러리에서 대신 해주므로 subscribe를 직접 해야 되는 일은 특별한 상황을 제외하고는 거의 없다.

```javascript
// 구독하기
const listener = () => console.log('업데이트 됐어요!')
const unsubscribe = store.subscribe(listener); // 나중에 unsbscribe();
```

# 8) 이벤트 달아주기, 액션 발생시키기

액션을 발생시는 것을 디스패치라고 부른다. 디스패치를 할 때에는 스토어의 내장 함수인 dispatch를 사용하고, 파라미터로 액션 객체를 전달한다.

```javascript
// 구독
store. subscribe(render);

// 이벤트 달아주기, 액션 발생 시키기
switchButton.onclick = () => {
  store.dispatch(toggleSwitch());
}

plusButton.onclick = () => {
  store.dispatch(increment(5));
}

minusButton.onclick = () => {
  store.dispatch(decrement());
}
```