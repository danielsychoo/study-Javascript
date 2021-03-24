const sudoku = function(board) {
  // TODO: 여기에 코드를 작성합니다.
  // rowIndex행에서 num이랑 충돌나는 녀석이 있는지 찾아요
  function checkRowConflict(rowIndex, num) {
    for (let i = 0; i < 9; i++) {
      if (board[rowIndex][i] === num) return true;
    }
    return false;
  }
  // colIndex열에서 num이랑 충돌나는 녀석이 있는지 찾아요
  function checkColConflict(colIndex, num) {
    for (let i = 0; i < 9; i++) {
      if (board[i][colIndex] === num) return true;
    }
    return false;
  }
  // [0, 0] ~ [2, 2] 0
  // [3, 3] ~ [5, 5] 1
  // 스도쿠에 사각형은 9개가 있어요
  // 0 1 2
  // 3 4 5
  // 6 7 8
  // 각 사각형 안에는 배열이 9칸 들어있어요
  // 내가 속한 사각형(3*3) 안에서 충돌나는 녀석이 있는지 찾아요
  function checkSquareConflict(rowIndex, colIndex, num) {
    rowIndex = Math.floor(rowIndex / 3) * 3;
    colIndex = Math.floor(colIndex / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[rowIndex + i][colIndex + j] === num) return true;
      }
    }
    return false;
  }
  // 스도쿠를 순회하면서 숫자 0을 찾아요
  // 숫자 0을 1~9 숫자로 바꿔야 하니까요
  function findZeroPosition(arr) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) {
          arr[0] = i;
          arr[1] = j;
          return true;
        }
      }
    }
    return undefined;
  }
  // 충돌조건 3개를 충족하는지 체크해요
  // 가로 세로 사각형에 충돌하지 않으면 true를 반환해요
  function checkConflict(row, col, num) {
    return (!checkRowConflict(row, num) && !checkColConflict(col, num) &&
      !checkSquareConflict(row, col, num));
  }
  function recursion() {
    const arr = [];
    // 스도쿠에서 0이 없으면(스도쿠를 완성했으면) true를 반환해요
    // 스도쿠에 0이 있으면 arr에 좌표를 넣어요 (파라미터에 배열을 넘기면 call by reference로 원본 배열을 수정가능)
    if (!findZeroPosition(arr)) return true;
    // arr에 담긴 좌표를 해체할당해줘요
    const [row, col] = arr;
    for (let i = 1; i <= 9; i++) {
      // 지금 row col은 숫자 0인 좌표에요 여기다가 1~9까지 다 넣어볼거에요
      if (checkConflict(row, col, i)) {
        // 일단은 1부터 넣어요
        board[row][col] = i;
        // 그리고 재귀호출을 해요 그럼 다음 0 지점에서 같은 로직을 반복해요
        // 만약 반환받은 값이 true이면 그대로 반복문과 재귀를 종료해요
        if (recursion()) return true;
        // 반환받은 값이 false이면(다음 칸이 전부 충돌나면) 넣은 숫자를 회수해요
        // 그리고 반복문을 마저 진행해요
        board[row][col] = 0;
      }
    }
    // 반복문을 다 돌았으면 (전부 충돌나면) false를 반환해요
    return false;
  }
  recursion();
  return board;
};