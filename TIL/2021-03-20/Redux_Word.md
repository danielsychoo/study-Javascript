## 액션 (Action)

상태에 변화가 필요할 때 우리는 액션을 발생시킨다.
액션은 하나의 객체로 표현되고 다음과 같은 형식으로 이루어져 있다.

```javascript
{
  type: "TOGGLE_VALUE"
}
```

액션 객체는 `type` 필드를 필수적으로 가지고 있어야 하고, 그 외의 값들은 선택적으로 넣어줄 수 있다.

예시:

```javascript
{
  type: "ADD_TODO",
  data: {
    id: 0,
    text: "리덕스 배우기"
  }
}

{
  type: "CHANGE_INPUT",
  text: "안녕"
}
```

## 액션 생성함수 (Action Creator)

액션 생성함수는 액션을 만드는 함수이다.
파라미터를 받아와서 액션 객체 형태를 리턴한다.

```javascript
function addTodo(data) {
  return {
    type: "ADD_TODO",
    data
  };
}

// 화살표 함수로도 만들 수 있다.
const changeInput = text => ({
  type: "CHANGE_INPUT",
  text
});
```

## 리듀서 (Reducer)

리듀서는 상태와 액션을 파라미터로 받아 새로운 상태를 리턴한다.

```javascript
function reducer(state, action) {
  //상태 업데이트 로직
  return alteredState;
}
```

## 스토어 (Store)

어플리케이션 안에서 현재의 앱 상태, 리듀서, 몇몇 내장 함수가 들어있는 곳.
하나의 어플리케이션에는 하나의 스토어를 만들게 된다.

## 디스패치 (dispatch)

디스패치는 스토어의 내장함수 중 하나이다.
디스패치는 액션을 발생시키는 것이다.
dispatch(action)과 같이 액션을 파라미터로 전달한다.
디스패치가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태를 만들어준다. (해당 액션을 처리하는 로직이 있을 경우)

## 구독 (subscribe)

구독도 스토어의 내장함수 중 하나이다.
구독은 함수형태의 값을 파라미터로 받아오는데, 액션이 디스패치 되었을 때 마다 받아온 함수가 호출된다.