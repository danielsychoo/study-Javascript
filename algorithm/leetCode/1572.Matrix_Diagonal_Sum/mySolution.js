var diagonalSum = function(mat) {
  let result = 0; // 결과값 담을 것
  let countIndex = -1; // row의 변화에 따른 Index 계산용

  if(mat.length % 2 === 0) { // mat.length가 짝수면
    for(let i = 0; i < mat.length; i++) {
      let currentRow = mat[i]; // 현재 줄 위치
      let rowsEndIndex = mat.length - 1; // 마지막 Index 고정
      if(i < mat.length / 2) {
        countIndex ++;
        result += currentRow[countIndex] + currentRow[rowsEndIndex - countIndex];
      } else {
        result += currentRow[countIndex] + currentRow[rowsEndIndex - countIndex];
        countIndex --;
      }
    }
  }

  else { // mat.length가 홀수면
    for(let i = 0; i < mat.length; i++) {
      let currentRow = mat[i]; // 현재 줄 위치
      let rowsEndIndex = mat.length - 1; // 마지막 Index 고정
      if(i < Math.floor(mat.length / 2)) {
        countIndex ++;
        result += currentRow[countIndex] + currentRow[rowsEndIndex - countIndex];
      } else if(i === Math.floor(mat.length / 2)) { // 중앙값 추가
        countIndex ++;
        result += currentRow[countIndex]
        countIndex --;
      } else {
        result += currentRow[countIndex] + currentRow[rowsEndIndex - countIndex];
        countIndex --;
      }
    }
  }
  return result;
};

// // 짝수 예시
// let mat = [
//   [1,1,1,1,1,1], // mat[0][0] + mat[0][mat[0].rowsEndIndex]
//   [1,1,1,1,1,1], // mat[1][1] + mat[1][mat[1].rowsEndIndex - 1]
//   [1,1,1,1,1,1], // mat[2][2] + mat[2][mat[2].rowsEndIndex - 2]
//   [1,1,1,1,1,1], // mat[3][2] + mat[3][mat[3].rowsEndIndex - 2]
//   [1,1,1,1,1,1], // mat[4][1] + mat[4][mat[4].rowsEndIndex - 1]
//   [1,1,1,1,1,1], // mat[5][0] + mat[5][mat[5].rowsEndIndex]
// ]
// diagonalSum(mat);
// Output: 12
//
// // 홀수 예시
// let mat = [
//   [1,1,1,1,1], // mat[0][0] + mat[0][mat[0].rowsEndIndex]
//   [1,1,1,1,1], // mat[1][1] + mat[1][mat[1].rowsEndIndex - 1]
//   [1,1,1,1,1], // mat[2][2]
//   [1,1,1,1,1], // mat[3][1] + mat[3][mat[3].rowsEndIndex - 1]
//   [1,1,1,1,1], // mat[4][0] + mat[4][mat[4].rowsEndIndex]
// ]
// diagonalSum(mat);
// Output: 11