{
  /**
   * Union Types: OR
   * 발생할 수 있는 type들을 or로 지정
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // ? 실전예제 function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  }
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  };

  // printLoginState(state: LoginState)
  // success -> ⭐️ body
  // fail -> ⚡️ reason

  function printLoginState(state: LoginState) {
    if('response' in state) { // state에 response라는 키가 있다면,
      console.log(`⭐️ ${state.response.body}`);
    } else {
      console.log(`⚡️ ${state.reason}`);
    };
  };
}